const listHelper = require('../utils/list_helper')
const { listWithOneBlog, blogs1, blogs1LeastLiked, blogs1Favorite } = require('./mockedBlogs')

describe('dummy', () => {
  test('dummy returns one', () => {
    const result = listHelper.dummy([])
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of larger list of blogs', () => {
    const result = listHelper.totalLikes(blogs1)
    expect(result).toBe(36)
  })
})

describe('favorite blog', () => {
  test('of empty list is "undefined"', () => {
    expect(listHelper.favoriteBlog([])).toBeUndefined()
  })

  test('when list has only one blog, return that blog (with 0 likes)', () => {
    expect(listHelper.favoriteBlog(blogs1LeastLiked).toEqual(blogs1LeastLiked))
  })

  test('of larger list of blogs', () => {
    expect(listHelper.favoriteBlog(blogs1).toEqual(blogs1Favorite))
  })
})
