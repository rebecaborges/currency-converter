require('dotenv').config()

const floatRatesClient = async() => {
  try {
    const response = await fetch(process.env.FLOAT_RATES_URL)
    return await response.json()
  } catch (error) {
    console.error('Error trying to fetch in floatRatesClient: ', error)
    throw error
  }
}
  
module.exports = floatRatesClient