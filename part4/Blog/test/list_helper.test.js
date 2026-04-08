const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')



test('dummy returns one', () => {
  const blogs = []

const result = listHelper.dummy(blogs)
assert.strictEqual(result, 1)
})


describe('total likes', () => {
  const blogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright-violation.html',
      likes: 5
    },
      {
            _id: '5422aa71b54a676234d17f9',
            title: 'Testing de test',
            author: 'Test Author',
            url: 'http://www.test2.html',
            likes: 8            }
  ]

  test('of a bigger list is calculated correctly', () => {
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result,13 )
  })
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })

})

describe('favorite blog', () => {
  const blogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      Author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright-violation.html',
      likes: 5
          },
          {
            _id: '5422aa71b54a676234d17f9',
            title: 'Testing de test',
            Author: 'Test Author',
            url: 'http://www.test2.html',
            likes: 8            }
  ]

  test('finds the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result,blogs[1] )
  })
})

describe('most blogs', () => {
  const blogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright-violation.html',
      likes: 5 },

          {
            _id: '5422aa71b54a676234d17f9',
            title: 'Testing de test',
            author: 'Test Author',
            url: 'http://www.test2.html',
            likes: 8
          },


   {    _id: '5422aa71b54a676234d17f9',
      title:'Blog 3',
      author: 'Test Author', // Segundo blog: ¡Ahora él es el ganador indiscutible!
      likes: 10
   }
  ]

  test('finds the author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(result, { author: 'Test Author', blogs: 2 })
  })
})
