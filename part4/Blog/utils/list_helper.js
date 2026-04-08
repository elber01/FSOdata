const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

//Calculates the total number of likes
const totalLikes = (blogs) => {

    return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0)
  }

// Finds the blog with the most likes and returns it.
  const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null
    return blogs.reduce((prev, current) => {
      return current.likes > prev.likes ? current : prev
    })
  }

  // Finds the author with the most blogs
const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

 const counts = _.countBy(blogs, 'author')

 const topAuthor = _.maxBy(_.keys(counts), (author) => counts[author])

return {
author: topAuthor,
blogs: counts[topAuthor]
}
}


// Finds the blog with the most likes and returns the number of likes.
const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

const groupedAuthor = _.groupBy(blogs, 'author')

const totalLikesByAuthor = _.map(groupedAuthor,(authorBlogs, author) => {
  return {
    author: author,
    likes: _.sumBy(authorBlogs, 'likes')
  }

})

return _.maxBy(totalLikesByAuthor, 'likes')
}


module.exports = {
  totalLikes,
  dummy,
  favoriteBlog,
  mostBlogs,
  mostLikes
}