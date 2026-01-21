import { useState, useEffect } from 'react'
import personService from './persons'    


//Components rendering
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
      //Security check
      if (!person || !person.name) return null;

      return (
        <li key={person.id}>
          {person.name} {person.number}
         <button onClick={() => {
            if (window.confirm(`Delete ${person.name}?`)) {
              personService.deletePerson(person.id,person.name)
              .then(() => {
                window.location.reload();
              })
            }
          }}>delete</button>
        </li>
      );
    })}
  </div>
)

const App = () => {

  /// List of app hooks
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')    
  const [filter, setFilter] = useState('')
  
  //Fetch data from server
  useEffect(() => {
        personService.getAll().then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

///Handlers for input changes

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

// Validate and add a new name and number
  const addPerson = (event) => {
    event.preventDefault()
  if (persons.some(p => p.name === newName)) {
    let choose = confirm(`${newName} name already exist on the agenda, replace the old number with a new one?`)
    if (choose) {
      //look for the person to update
      const personToUpdate = persons.find(p => p.name === newName)
      //create the updated person object
      const updatedPerson = { ...personToUpdate, number: newNumber }
      //send the update request
      personService
        .updatePerson(personToUpdate.id, updatedPerson)
        .then(returnedPerson => {
          //update the state with the returned person
          setPersons(persons.map(p => p.id !== personToUpdate.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          alert(`Information of ${newName} has already been removed from server`)
          setPersons(persons.filter(p => p.id !== personToUpdate.id))
        })
     
    }
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