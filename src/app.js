require('dotenv').config()
const express = require('express')
const routes = require('./routes/route.js')
const swaggerUi = require('swagger-ui-express');
const OpenApiValidator = require('express-openapi-validator')
const swaggerDocument = require('../openapi.json')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.json',
    validateRequests: true,
    validateResponses: true,
  })
)

app.use("/api", routes)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))

module.exports = app