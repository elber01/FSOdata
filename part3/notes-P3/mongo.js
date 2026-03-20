const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://hamiltonedwin_db_user:${password}@cluster0.1rnecup.mongodb.net/Noteapp?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({

  content: {
  type: String,
  minLength: 5,
  required: true,
  },
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(() => {
  console.log('note saved!')

})

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

Note.find({ important: true }).then(() => {
  // ...
})