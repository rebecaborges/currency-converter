const JSONData = require('../client/JSONData.js')

const currencyService = async (req, res) => {
  try {
    const inputValue = Number(req.params.value)

    const currency = await JSONData()
    const currencyRateUSD = currency.usd.rate
    const currencyRateEUR = currency.eur.rate
    const currencyRateINR = currency.inr.rate

    const usd = (currencyConverter(currencyRateUSD ,inputValue))
    const eur = (currencyConverter(currencyRateEUR ,inputValue))
    const inr = (currencyConverter(currencyRateINR ,inputValue))

    return {
      USD: usd,
      EUR: eur,
      INR: inr
    }
  } catch (error) {
    console.error('Error on: ', error)
    return res.status(500).json({message: 'Internal error'})
  }
}

const currencyConverter = (currency, inputValue) => {
  return (currency * inputValue).toFixed(2)
}

module.exports = { currencyService }