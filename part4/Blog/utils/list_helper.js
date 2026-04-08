const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {

    return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
  }

  const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null
    return blogs.reduce((prev, current) => {
      return current.likes > prev.likes ? current : prev
    })
  }

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

 const counts = _.countBy(blogs, 'author')

 const topAuthor = _.maxBy(_.keys(counts), (author) => counts[author])

return {
author: topAuthor,
blogs: counts[topAuthor]
}
}

module.exports = {
  totalLikes,
  dummy,
  favoriteBlog,
  mostBlogs
}