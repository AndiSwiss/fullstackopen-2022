const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.map(blog => blog.likes).reduce((sum, item) => sum + item, 0)

// maybe not good readable as one-liner:
// const favoriteBlog = (blogs) => blogs.reduce((sum, item) => (sum?.likes ?? 0) > item.likes ? sum : item, undefined)
const favoriteBlog = (blogs) => blogs.reduce(
  (sum, item) => (sum?.likes ?? 0) > item.likes
    ? sum
    : item,
  undefined
)

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
