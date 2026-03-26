import { useState, useEffect } from 'react'
import { Blog, Notification, Footer } from './components/blogs' 
import blogService from './services/blogs'
import './index.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null) // Cambiado a null

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        console.log('Received blogs from server:', initialBlogs)
       if (Array.isArray(initialBlogs)) {
        setBlogs(initialBlogs)
      }else {
        console.error('Expected an array of blogs but got:', initialBlogs)
      }
      })
  
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newBlog,
      author: 'Edwin Hamilton',
      url: 'http://example.com',
      likes: 0 // Puedes modificar esto para permitir ingresar el autor
      // El ID lo crea MongoDB automáticamente, no lo pongas aquí
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlog('')
      })
        .catch(error => { 
          setErrorMessage('Failed to add blog: ' + error.message)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
  }) }

  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
  }

  const toggleLikesOf = (id) => {
    const blog = blogs.find(b => b.id === id)
    const changedBlog = { ...blog, likes: (blog.likes || 0) + 1 }

    blogService
      .update(id, changedBlog)
      .then(returnedBlog => {
        setBlogs(blogs.map(b => b.id !== id ? b : returnedBlog))
      })
      .catch(error => {
        setErrorMessage(
          `the blog '${blog.title}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setBlogs(blogs.filter(b => b.id !== id))
      })
  }

  const blogsToShow = showAll ? blogs : blogs.filter((blog) => blog.likes > 0)

  return (
    <div>
      <h1>Favorite Blogs</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'liked' : 'all' }
        </button>
      </div>      
      <ul>
        {blogs.map(blog => (
          <Blog
            key={blog.id} // Usa blog.id si existe
            blog={blog} 
            toggleImportance={() =>toggleLikesOf(blog.id)}
          />
        ))}
      </ul>
      <form onSubmit={addBlog}>
        <input value={newBlog} onChange={handleBlogChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App
