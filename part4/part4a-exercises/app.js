require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { info } = require('./utils/logger')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

// from https://cloud.mongodb.com => Button 'Connect' => 'Connect your application'
const MONGODB_URL = process.env.MONGODB_URL
if (!MONGODB_URL) throw 'MONGODB_URL is missing in .env!'
mongoose.connect(MONGODB_URL)
  .then(() => info(`connected to MongoDB: ${MONGODB_URL}`))
  .catch(error => {
    info(`error connecting to MongoDB: ${MONGODB_URL}`)
    info(`error-message: ${error}`)
  })

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = app
