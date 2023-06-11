const express = require('express')
const routes = require('./routes/route.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api", routes)

app.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
