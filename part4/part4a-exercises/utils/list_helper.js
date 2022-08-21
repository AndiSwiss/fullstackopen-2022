const _ = require('lodash')

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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
