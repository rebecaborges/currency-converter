require('dotenv').config()

const floatRatesClient = async(currency) => {
  try {
    const floatRates = `${process.env.FLOAT_RATES_URL}${currency}.json`

    const response = await fetch(floatRates)

    return await response.json()
  } catch (error) {
    console.error('Error trying to fetch in floatRatesClient: ', error)
    throw error
  }
}
  
module.exports = floatRatesClient