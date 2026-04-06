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
    }
  ]

  test('of a bigger list is calculated correctly', () => {
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 5)
  })
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })

})