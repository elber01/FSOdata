
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
    
  //Handle name change
  const handleNameChange = (event) => {
 
    setNewName(event.target.value)
  }
  
  // Validate and add a new name
  const addPerson = (event) => {
    event.preventDefault()
  if (persons.some(p => p.name === newName)) {
     alert(`${newName} name already exist on the agenda`)
      return
    }

    const personObject = {
      name: newName
    }
 //Update the list of persons to show
    setPersons(persons.concat(personObject))
    setNewName('')
  
  }
 


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <div>{persons.map(person => <li key={person.name}>{person.name}</li>)}</div>
    
    </div>
  )
}

export default App