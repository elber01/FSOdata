require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(express.static( 'dist'))
app.use(express.json())

// Connect to MongoDB
const url = process.env.MONGODB_URI
console.log('connecting to', url? url : 'No MONGODB_URI detected. Please set the MONGODB_URI environment variable.')
mongoose.connect(url)
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})


// Config morgan
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// RUTES



app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) res.json(person)
      else res.status(404).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const { name, number } = req.body
// I comment this part to allaw the validation to be handled by Mongoose and the error to be handled by the error handling middleware
  /*if (!name || !number) {
    return res.status(400).json({ error: 'name or number missing' })
  }
*/
  const person = new Person({ name, number })

  person.save()
    .then(savedPerson => res.json(savedPerson))
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const { name, number } = req.body

  Person.findByIdAndUpdate(
    req.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedPerson => res.json(updatedPerson))
    .catch(error => next(error))
})


//Delete button fix
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id) // <--- Esto borra en la nube
    .then(() => res.status(204).end())
    .catch(error => next(error))
})
// This route is for the frontend to get the index.html file, it should be before the API routes
app.get(/^(?!\/api).+$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Error handling middleware
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }

  else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 8080
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
