import axios from 'axios'

const baseUrl = '/api/persons' 



// Managing the API calls to the backend
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
// Create a new person in the backend
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Update an existing person in the backend
const updatePerson = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
// Delete a person from the backend
const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, create, updatePerson, deletePerson }
