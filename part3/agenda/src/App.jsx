import { useState, useEffect } from 'react'
import personService from './components/persons'

// Filter component for searching persons
const Filter = ({ filter, handleFilterChange }) => (
  <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
)

// PersonForm component for adding new persons
const PersonForm = (props) => (
  <form onSubmit={props.addPerson}>
    <div>name: <input value={props.newName} onChange={props.handleNameChange} /></div>
    <div>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
    <div><button type="submit">add</button></div>
  </form>
)

// Persons component to display the list of persons with delete buttons
const Persons = ({ personsToShow, deletePerson }) => (
  <ul>
    {personsToShow.map(person => (
      <li key={person.id}>
        {person.name} {person.number} 
        <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
      </li>
    ))}
  </ul>
)

// Notification component for displaying messages
const Notification = ({ message, type }) => {
  if (message === null) return null
  return <div className={type}>{message}</div>
}

// Main App component
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ msg: null, type: 'success' })

  // Initial data fetch with error handling
  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(Array.isArray(initialPersons) ? initialPersons : [])
      })
      .catch(error => {
        console.error('Error fetching persons:', error)
        setPersons([])
      })
  }, [])

  // Notification helper function
  const notify = (msg, type = 'success') => {
    setNotification({ msg, type })
    setTimeout(() => setNotification({ msg: null, type: 'success' }), 5000)
  }

  // Add or update person logic with error handling
  const addPerson = (event) => {
    event.preventDefault()

    // Secrity check: Ensure persons is an array before using find
    const currentPersons = Array.isArray(persons) ? persons : []
    const existingPerson = currentPersons.find(p => p.name === newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already added, replace number?`)) {
        const changedPerson = { ...existingPerson, number: newNumber }

        personService.updatePerson(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(currentPersons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')          
            notify(`Updated ${newName}`)
          })
          .catch(error => {
            notify(`Information of ${newName} already removed or error in update`, 'error')
            setPersons(currentPersons.filter(p => p.id !== existingPerson.id))
          })
      }
      return
    }

    const personObject = { name: newName, number: newNumber }
    personService.create(personObject)
      .then(returnedPerson => {
        setPersons(currentPersons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        notify(`Added ${newName}`)
      })
      .catch(error => {

        // Captura errores de validación del backend (ej: nombre muy corto)
        notify(error.response.data.error, 'error')
      })
  }

  // Delete person logic with confirmation and error handling
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id)
        .then(() => {
          const currentPersons = Array.isArray(persons) ? persons : []
          setPersons(currentPersons.filter(p => p.id !== id))
          notify(`Deleted ${name}`)
        })
        .catch(() => {
          notify(`Error deleting ${name} or already removed from server`, 'error')
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  // Filtering logic with safety check for persons being an array
  const personsToShow = Array.isArray(persons) 
    ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) 
    : []

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.msg} type={notification.type} />
      <Filter filter={filter} handleFilterChange={(e) => setFilter(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
