const router = require('express').Router()
const apiRoute = require('./api.routes')

router.use('/api',apiRoute)

module.exports = router