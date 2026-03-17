const mongoose = require('mongoose')
// const url = `mongodb+srv://hamiltonedwin_db_user:${
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
// const url = `mongodb+srv://hamiltonedwin_db_user:${
const url = `mongodb+srv://hamiltonedwin_db_user:${password}@cluster0.1rnecup.mongodb.net/Agenda?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)
//Define a schema for the person collection
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
// Create a model based on the schema
const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({ name, number })
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('phonebook:')
  Person.find({}).then(persons => {
    persons.forEach(p => console.log(`${p.name} ${p.number}`))
    mongoose.connection.close()
  })
}
