const express = require('express')
const router = express.Router()
const dateTimeController = require('../controller/date-time')

router.get('/api/timestamp/:date_string' , dateTimeController.timeStamp)

router.get('/api/timestamp' , dateTimeController.defaultTimeStamp)
module.exports = router