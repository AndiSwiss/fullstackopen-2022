const listHelper = require('../utils/list_helper')
const { listWithOneBlog, blogs1, blogs1Favorite, blogs1LeastLiked } = require('./mockedBlogs')

describe('dummy', () => {
  test('dummy returns one', () => {
    expect(listHelper.dummy([])).toBe(1)
  })
})

describe('total likes', () => {
  test('of no list is "undefined"', () => {
    expect(listHelper.totalLikes()).toBeUndefined()
  })

  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('of larger list of blogs', () => {
    expect(listHelper.totalLikes(blogs1)).toBe(36)
  })
})

describe('favorite blog', () => {
  test('of no list is "undefined"', () => {
    expect(listHelper.favoriteBlog()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(listHelper.favoriteBlog([])).toBeUndefined()
  })

  test('when list has only one blog, return that blog (with 0 likes)', () => {
    const listWithOneBlogZeroLikes = [blogs1LeastLiked]
    // Check, that this blog actually has likes = 0:
    expect(blogs1LeastLiked.likes).toBe(0)
    expect(listHelper.favoriteBlog(listWithOneBlogZeroLikes)).toEqual(blogs1LeastLiked)
  })

  test('of larger list of blogs', () => {
    expect(listHelper.favoriteBlog(blogs1)).toEqual(blogs1Favorite)
  })
})

describe('most blogs by author', () => {
  test('of no list is "undefined"', () => {
    expect(listHelper.mostBlogs()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(listHelper.mostBlogs([])).toBeUndefined()
  })

  test('when list has only one blog', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      blogs: 1
    }
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual(expected)
  })

  test('of larger list of blogs', () => {
    const expected = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    const result = listHelper.mostBlogs(blogs1)
    expect(result).toEqual(expected)
  })
})

describe('most liked author', () => {
  test('of no list is "undefined"', () => {
    expect(listHelper.mostLikes()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(listHelper.mostLikes([])).toBeUndefined()
  })

  test('when list has only one blog', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      likes: 5
    }
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual(expected)
  })

  test('of larger list of blogs', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    }
    const result = listHelper.mostLikes(blogs1)
    expect(result).toEqual(expected)
  })
})

