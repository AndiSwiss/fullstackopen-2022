const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'something',
    author: 'me',
    url: 'google.com',
    likes: 4
  },
  {
    title: 'smart stuff',
    author: 'hugo',
    url: '',
    likes: 5
  },
  {
    title: 'another one',
    author: 'me',
    url: 'yahoo.com',
    likes: 3
  }
]

const aBlog = new Blog({
  title: 'will be deleted anyhow',
  author: 'anybody',
  url: 'nothing.com',
  likes: 1
})

const nonExistingId = async () => {
  await aBlog.save()
  await aBlog.remove()
  return aBlog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  /* NOTE:
   * The following changes:
   *    _id: new ObjectId("630b8efa126f08d6cecc0f79")    ==>     id: '630b8efa126f08d6cecc0f79'
   * And removes the    __v: 0
   *
   * BEFORE:
   * =======
     {
        _id: new ObjectId("630b8efa126f08d6cecc0f79"),
        content: 'HTML is easy',
        date: 2022-08-28T15:51:21.839Z,
        important: false,
        __v: 0
      }
   *
   * AFTER:
   * ======
     {
        content: 'HTML is easy',
        date: 2022-08-28T15:51:21.839Z,
        important: false,
        id: '630b8efa126f08d6cecc0f79'
      }
   */
  return blogs.map(blog => blog.toJSON())
}

module.exports = { initialBlogs, nonExistingId, blogsInDb }
