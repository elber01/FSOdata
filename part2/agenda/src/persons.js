import axios from 'axios'

//  base
const baseUrl = 'http://localhost:3001/persons'

// Función para obtener todos los contactos
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Función para crear un nuevo contacto
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Exportamos un objeto con las funciones para que App.js las use
export default { 
  getAll: getAll, 
  create: create 
}
