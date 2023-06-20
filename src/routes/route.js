const express = require('express')
const { currencyController } = require('../controllers/controller.js')

const router = express.Router()

router.get('/convert/BRL/:value', currencyController)

module.exports = router;