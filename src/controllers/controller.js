const { currencyService } = require('../services/service.js')

const ping = ( async (req, res) => {
  await res.status(200).json({message: 'pong'})
})

const currencyController = ( async (req, res) => {
  try {
    const responseService = await currencyService(req, res)

    res.json(responseService)
  } catch (error) {
    console.error('Error on: ', error)
  }
})

module.exports = { ping, currencyController }