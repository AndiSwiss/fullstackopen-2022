const {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes_v1,
  mostLikes_v2,
  mostLikes_v3
} = require('../utils/list_helper')
const { listWithOneBlog, blogs1, blogs1Favorite, blogs1LeastLiked } = require('./mockedBlogs')

describe('dummy', () => {
  test('dummy returns one', () => {
    expect(dummy([])).toBe(1)
  })
})

describe('total likes', () => {
  test('of no list is "undefined"', () => {
    expect(totalLikes()).toBeUndefined()
  })

  test('of empty list is zero', () => {
    expect(totalLikes([])).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    expect(totalLikes(listWithOneBlog)).toBe(5)
  })

  test('of larger list of blogs', () => {
    expect(totalLikes(blogs1)).toBe(36)
  })
})

describe('favorite blog', () => {
  test('of no list is "undefined"', () => {
    expect(favoriteBlog()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(favoriteBlog([])).toBeUndefined()
  })

  test('when list has only one blog, return that blog (with 0 likes)', () => {
    const listWithOneBlogZeroLikes = [blogs1LeastLiked]
    // Check, that this blog actually has likes = 0:
    expect(blogs1LeastLiked.likes).toBe(0)
    expect(favoriteBlog(listWithOneBlogZeroLikes)).toEqual(blogs1LeastLiked)
  })

  test('of larger list of blogs', () => {
    expect(favoriteBlog(blogs1)).toEqual(blogs1Favorite)
  })
})

describe('most blogs by author', () => {
  test('of no list is "undefined"', () => {
    expect(mostBlogs()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(mostBlogs([])).toBeUndefined()
  })

  test('when list has only one blog', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      blogs: 1
    }
    const result = mostBlogs(listWithOneBlog)
    expect(result).toEqual(expected)
  })

  test('of larger list of blogs', () => {
    const expected = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    const result = mostBlogs(blogs1)
    expect(result).toEqual(expected)
  })
})

const runMostLikedAuthorTests = (fnc) => {
  test('of no list is "undefined"', () => {
    expect(fnc()).toBeUndefined()
  })

  test('of empty list is "undefined"', () => {
    expect(fnc([])).toBeUndefined()
  })

  test('when list has only one blog', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      likes: 5
    }
    const result = fnc(listWithOneBlog)
    expect(result).toEqual(expected)
  })

  test('of larger list of blogs', () => {
    const expected = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    }
    const result = fnc(blogs1)
    expect(result).toEqual(expected)
  })

  // Useful while developing the function 'fnc'
  test('just console output', () => {
    const result = fnc(blogs1)
    console.log(`result =`, result)
  })
}

describe('most liked author - VERSION 1', () => runMostLikedAuthorTests(mostLikes_v1))
describe('most liked author - VERSION 2', () => runMostLikedAuthorTests(mostLikes_v2))
describe('most liked author - VERSION 3', () => runMostLikedAuthorTests(mostLikes_v3))

