const express = require('express')
const router = express.Router()
const service = require('../services/aboutService')

// --> /about

router.get('/', function (req, res, next) {
   res.send(service.about())
})

module.exports = router