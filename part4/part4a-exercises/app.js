require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { info } = require('./utils/logger')
const blogRouter = require('./controllers/blogs')


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

app.use('/api/blogs', blogRouter) // Use all the routes for the blog api

module.exports = app
