
// src/components/blogs.jsx



const Blog = ({ blog, toggleImportance }) => {
  if (!blog)  return null
  
  return (
    <li>
      Name: {blog.title} Author: {blog.author} -
      <strong>Likes: {blog.likes ||0}</strong>
      <button onClick={toggleImportance}>Like</button>
    </li>
  )
}

const Notification = ({ message }) => {
  if (message === null) return null
  return (
    <div className="error">
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Blog app, by Edwin Hamilton Fullstack Open Course, University of Helsinki 2026</em>
    </div>
  )
}

export {Blog, Notification, Footer }