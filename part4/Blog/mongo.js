const mongoose = require('./mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://hamiltonedwin_db_user:${password}@cluster0.1rnecup.mongodb.net/Blogapp?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  content: 'testing.com',
  important: true,
})

blog.save().then(() => {
  console.log('Blog saved!')

})

Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})

Blog.find({ likes: { $gt: 0 } }).then(() => {
  // ...
})