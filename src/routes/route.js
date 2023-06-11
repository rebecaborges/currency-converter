const express = require('express')
const router = express.Router()

const { ping, currencyController } = require('../controllers/controller.js')

router.get('/ping', ping);

router.get('/convert/BRL/:value', currencyController);

module.exports = router;