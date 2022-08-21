const _ = require('lodash')

// noinspection JSUnusedLocalSymbols
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs?.map(blog => blog.likes).reduce((sum, item) => sum + item, 0)

// maybe not good readable as one-liner:
// const favoriteBlog = (blogs) => blogs?.reduce((sum, item) => (sum?.likes ?? 0) > item.likes ? sum : item, undefined)
const favoriteBlog = (blogs) => blogs?.reduce(
  (sum, item) => (sum?.likes ?? 0) > item.likes
    ? sum
    : item,
  undefined
)

const mostBlogs = (blogs) => {
  if (!blogs || !blogs.length) return undefined // checks if blogs is not defined OR blogs.length is falsy (0, undefined, ...)
  const authors = _.countBy(blogs, o => o.author)
  const author = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)
  return {
    author,
    blogs: authors[author]
  }
}

/**
 * Version 1 of mostLiked (works) - no LoDash-library
 */
const mostLikes_v1 = (blogs) => {
  if (!blogs || !blogs.length) return undefined // checks if blogs is not defined OR blogs.length is falsy (0, undefined, ...)
  const authors = blogs.reduce((sum, item) => {
    sum[item.author] = (sum[item.author] ?? 0) + item.likes
    return sum
  }, {})
  const author = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)
  return {
    author,
    likes: authors[author]
  }
}

/**
 * Version 2 of mostLiked (works) - with LoDash-library towards the end
 */
const mostLikes_v2 = (blogs) => {
  if (!blogs || !blogs.length) return undefined // checks if blogs is not defined OR blogs.length is falsy (0, undefined, ...)
  const authors = blogs.reduce((sum, item) => {
    sum[item.author] = (sum[item.author] ?? 0) + item.likes
    return sum
  }, {})
  const asEntries = Object.entries(authors).map(o => ({ author: o[0], likes: o[1] }))
  return _.maxBy(asEntries, 'likes')
}

/**
 * Version 3 of mostLiked (works) - with only 1 statement!
 */
const mostLikes_v3 = (blogs) => {
  return !blogs || !blogs.length
    ? undefined // checks if blogs is not defined OR blogs.length is falsy (0, undefined, ...)
    : _.maxBy(Object
        .entries(blogs.reduce((sum, item) => ({ ...sum, [item.author]: (sum[item.author] ?? 0) + item.likes }), {}))
        .map(o => ({ author: o[0], likes: o[1] })),
      'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes_v1,
  mostLikes_v2,
  mostLikes_v3
}
