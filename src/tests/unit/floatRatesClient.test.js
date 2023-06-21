const floatRatesMock = require('../../common/__mocks__/floatRates.mock')
const floatRatesClient = require('../../client/floatRates')

describe('floatRatesClient', () => {
  it('should return response of client Float Rates with list of rates', async () => {
    const mockFetch = global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(floatRatesMock)
      })
    )

    const inputCurrency = 'brl'

    const response = await floatRatesClient(inputCurrency)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(
      'http://www.floatrates.com/daily/brl.json'
    )
    expect(response).toEqual(floatRatesMock)
  })
})
