const express = require('express')
const router = express.Router()

const { currencyController } = require('../controllers/controller.js')

router.get('/convert/BRL/:value', currencyController);

module.exports = router;