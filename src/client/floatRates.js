const floatRatesClient = async() => {
  try {
    const response = await fetch("http://www.floatrates.com/daily/brl.json")
    return await response.json()
  } catch (error) {
    console.error('Error trying to fetch in floatRatesClient: ', error)
    return Error('Error trying to fetch in floatRatesClient')
  }
}
  
module.exports = floatRatesClient