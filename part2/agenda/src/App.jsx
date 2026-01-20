import { useState, useEffect } from 'react'
import personService from './persons'    
import axios from 'axios'

//Component rendering
const Filter = ({filter, handleFilterChange}) => (
  <div>
    Filter shown with <input value={filter} onChange={handleFilterChange}/>
  </div>
)
const Personform = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
   </div>
    <div>
      number: <input  value= {newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Persons = ({personsToShow}) => (
  <div>
    {personsToShow.map(person => {
      // Verificación de seguridad: si no hay persona o nombre, no renderiza nada
      if (!person || !person.name) return null;

      return (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      );
    })}
  </div>
)

const App = () => {

  /// List of app hooks
  const [persons, setPersons] = useState([])
    
  useEffect(() => {
     // console.log('effect')
      personService.getAll().then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

//    console.log('render', persons.length, 'persons')
  /* useState([
    { name: 'Arto Hellas', 
      number: '040-123456'
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  
  ])*/ 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')    
  const [filter, setFilter] = useState('')

  
///Handleres for input changes
  //Handle name change
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  //Handle number change
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
 //Filter shown with input value
const handleFilterChange = (event) => {
   setFilter (event.target.value)
}

 
// Validate and add a new name and numer
  const addPerson = (event) => {
    event.preventDefault()
  if (persons.some(p => p.name === newName)) {
     alert(`${newName} name already exist on the agenda`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    //Update the list of persons to show

    personService.create(personObject).then(response => {
      setPersons(persons.concat(response))
      setNewName('')
      setNewNumber('')
    })
  }

//Filter and sort persons to show
const personsToShow = persons 
.filter(person => 
  person.name && person.name.toLowerCase().includes(filter.toLowerCase())
)
.sort((a, b) => 
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
)




  return (
    <div>
      <h2>Phonebook</h2>
     
     <Filter filter={filter} handleFilterChange={handleFilterChange} />
      
        <h3>Add a new</h3>
        <Personform addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
        <h3>Numbers</h3>
   
 <Persons personsToShow={personsToShow} />
   
    </div>
  )
}

export default App