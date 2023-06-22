const { currencyService } = require('../../services/service.js')
const floatRatesMock = require('../../common/__mocks__/floatRates.mock.js')

describe('currencyService', () => {
  it('should return a list of converted currency values to BRL currency', async () => {
    const inputValue = 100

    const inputCurrency = 'brl'

    const convertionObject = await currencyService(inputValue, inputCurrency, floatRatesMock)

    expect(convertionObject).toStrictEqual({
      USD: 20.45,
      EUR: 19,
      INR: 1686.34
    })
  })

  it('should return a list of converted currency values to USD currency', async () => {
    const inputValue = 100

    const inputCurrency = 'usd'

    const mockedFloatRatesClient = {
      eur: { rate: 0.9 },
      inr: { rate: 85.5 },
      brl: { rate: 0.20 }
    }

    const convertionObject = await currencyService(inputValue, inputCurrency, mockedFloatRatesClient)

    expect(convertionObject).toStrictEqual({
      USD: 100,
      EUR: 90,
      INR: 8550
    })
  })
})
