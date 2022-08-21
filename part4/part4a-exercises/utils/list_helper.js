const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.map(blog => blog.likes).reduce((a, b) => a + b, 0)

const favoriteBlog = (blogs) => undefined // TODO: write function

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
