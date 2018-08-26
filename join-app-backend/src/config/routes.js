const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/', router)

    // Routes
    const eventService = require('../api/events/eventService')(router)
}