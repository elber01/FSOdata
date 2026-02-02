const express = require('express');
const app = express();
const port = 3001;

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => {
    if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
    return note.id === id
  })

})

app.use(express.json())

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
})

app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)
  response.json(note)
})

const PORT = 3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)