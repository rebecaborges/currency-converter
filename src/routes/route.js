const express = require('express')
const { currencyController } = require('../controllers/controller.js')

const router = express.Router()

router.get('/convert/:currency/:value', currencyController)

module.exports = router
