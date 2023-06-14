const floatRatesMock = require('../../common/__mocks__/floatRates.mock')
const floatRatesClient = require('../../client/floatRates')

describe('floatRatesClient', () => {
  it('should return client float rates', async () => {
    const mockFetch = global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(floatRatesMock)
      })
    )

    const response = await floatRatesClient()

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(
      'http://www.floatrates.com/daily/brl.json'
    )
    expect(response).toEqual(floatRatesMock)
  })
})
