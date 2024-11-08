const question = require('../db/models/question')
const questionRoute = require('./question.routes')
const topicsRoute = require('./topic.routes')
const router = require('express').Router()

router.use('/questions', questionRoute)
router.use('/topics', topicsRoute)

module.exports = router