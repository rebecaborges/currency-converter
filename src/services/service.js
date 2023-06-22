const currencyService = async (inputValue, inputCurrency, floatRatesClient) => {
  try {
    let result = {}

    const conversionTable = await floatRatesClient

    const currencies = ['usd', 'eur', 'inr']

    currencies.forEach((currency) => {
      if (!conversionTable[currency]) {
        result[inputCurrency.toUpperCase()] = inputValue
      } else {

        const rate = conversionTable[currency].rate

        const convertedValue = Math.trunc(rate * inputValue * 100) / 100

        result[currency.toUpperCase()] = convertedValue
      }
    })

    return result

  } catch (error) {
    console.error('Error on service: ', error)
    throw error
  }
}

module.exports = { currencyService }
