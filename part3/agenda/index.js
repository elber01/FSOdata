const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()       
const cors = require('cors')
const notes = require('./src/components/persons')



app.use(express.json())

morgan.token('body', (req,res) =>{
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use(cors())

let persons =
[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')))
// Middleware to parse JSON bodies
app.get('/info', (req, res) => {
  const info = `<p>Phonebook has info for 2 people</p> 
  <br>
  <p>${new Date().toString()}</p>`
    res.send(info)
})

// Get all persons
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/notes/', (req, res) => {
  res.json(notes)
})


// Get a single person
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => {
    return person.id === id
  })
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  } 
})
// Delete a person
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post ('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }
const person = {
    id: Math.floor(Math.random() * 10000),
    name: body.name,
    number: body.number,} 
  persons = persons.concat(person)
  res.json(person)
})

// Generate a random ID
app.get('/api/persons/:id', (req, res) => {
    const id = Math.random().toString(50).substring(2, 9)
    res.json(id)
})
//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message)
   res.status(400).send({ error: 'malformatted id' })
   res.status(404).send({ error: 'not found' })
   res.status(500).send({ error: 'internal server error' })
   res.status(403).send({ error: 'forbidden' })
   res.status(401).send({ error: 'unauthorized' })
   res.status(409).send({ error: 'name must be unique' })
   res.status(400).send({ error: 'number missing' })
   
})

const distPath = path.join(__dirname, 'dist')
console.log('Buscando archivos estáticos en:', distPath)
app.use(express.static(distPath))

const PORT= 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})