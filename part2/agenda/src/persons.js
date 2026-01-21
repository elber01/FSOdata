import axios from 'axios'

//  base
const baseUrl = 'http://localhost:3001/persons'

// Get all contacts
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Create a new contact
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Delete a contact
const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
  
}

const updatePerson= (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Export functions
export default { getAll, create, deletePerson, updatePerson }