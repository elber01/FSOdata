
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '040-123456'
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')    
  const [filter, setFilter] = useState('')


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
  const valueFilter = setFilter (event.target.value)
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
    setPersons(persons.concat(personObject))
    setNewName('')
  
  }

//Filter and sort persons to show
const personsToShow = [...persons] 
.filter(person => 
  person.name.toLowerCase().includes(filter.toLowerCase())
)
.sort((a, b) => 
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>Filter shown with <input value={filter} onChange={handleFilterChange}/></div>
      
        <h2>Add a new</h2>
        <div>
         name: <input value={newName} onChange={handleNameChange}/>
        </div>
          <div>
            number: <input  value= {newNumber} onChange={handleNumberChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
   
     <div>{personsToShow.map(person => <li key={person.name}>{person.name} {person.number}</li>)}</div>
    
    </div>
  )
}

export default App