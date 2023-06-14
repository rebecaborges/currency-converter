const { currencyService } = require('../services/service.js')
const floatRatesClient = require('../client/floatRates.js')

const currencyController = ( async (req, res) => {
  try {
    const inputValue = Number(req.params.value)

    const convertedCurrency = await currencyService(inputValue, floatRatesClient)

    return res.json(convertedCurrency)
  } catch (error) {
    console.error('Error: ', error)
  }
})

module.exports = { currencyController }