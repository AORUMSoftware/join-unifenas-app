const port = 9090

// Requires
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`Backend is running on port ${port}`)
})

module.exports = server