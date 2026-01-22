import { useState, useEffect } from 'react'
import axios from 'axios'
import {Note, Notification, Footer} from './components/notes' 
import noteService from './services/notes'
import './index.css'
import { set } from 'mongoose'

const App = () => {
  //hooks
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(
    'Some error happened...'
  )

  useEffect(() => {
    /*console.log('effect')
    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfilled')
      setNotes(response.data)*/
      noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
    })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }


  /*  axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      console.log(response)
      
    setNotes(notes.concat(noteObject))
    setNewNote('')*/
        noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

const toggleImportanceOf = id => {
  const url = `http://localhost:3001/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }

 /* axios.put(url, changedNote).then(response => {
    setNotes(notes.map(note => note.id !== id ? note : response.data))
 */

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })
   .catch(error => {
    setErrorMessage(
      `the note '${note.content}' was already removed from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })

}

 

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map((note, i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App