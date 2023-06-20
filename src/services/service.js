const currencyService = async (inputValue, floatRatesClient) => {
  try {
    const conversionTable = await floatRatesClient()

    const currencies = ["usd", "eur", "inr"]

    let result = {}

    currencies.forEach((currency) => {
      const rate = conversionTable[currency].rate

      const convertedValue = Math.trunc(rate * inputValue * 100) / 100

      result[currency.toUpperCase()] = convertedValue
    })

    return result

  } catch (error) {
    console.error('Error on service: ', error)
    throw error
  }
}

module.exports = { currencyService }