const { currencyService } = require('../services/service.js')
const floatRatesClient = require('../client/floatRates.js')

const currencyController = ( async (req, res) => {
  try {
    const inputValue = Number(req.params.value)

    const currency = req.params.currency

    const floatRates = await floatRatesClient(currency)

    const convertedCurrency = await currencyService(inputValue, currency, floatRates)

    return res.json(convertedCurrency)
  } catch (error) {
    console.error('Error on controller: ', error)
    return res.status(500).send({message: "Internal Error"})
  }
})

module.exports = { currencyController }