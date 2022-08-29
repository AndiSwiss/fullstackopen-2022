const infoRouter = require('express').Router()

infoRouter.get('/', (request, response) => {
  response.send('<div>' +
    '<h1>Blogs</h1>' +
    '<ul>' +
    '<li>All blogs (RESTful API): <a href="api/blogs">blogs</a></li>' +
    '</ul>' +
    '</div>')
})

module.exports = infoRouter
