const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { info } = require('./utils/logger')
const blogRouter = require('./controllers/blogs')
const { MONGODB_URL, MONGODB_URL_NO_PW } = require('./utils/config')
const middleware = require('./utils/middleware')

// from https://cloud.mongodb.com => Button 'Connect' => 'Connect your application'
mongoose.connect(MONGODB_URL)
  .then(() => info(`connected to MongoDB: ${MONGODB_URL_NO_PW}`))
  .catch(error => {
    info(`error connecting to MongoDB: ${MONGODB_URL_NO_PW}`)
    info(`error-message: ${error}`)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouter) // Use all the routes for the blog api
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
