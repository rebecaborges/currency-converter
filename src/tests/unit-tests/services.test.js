const { currencyService } = require('../../services/service.js')

describe('currencyService', () => {
  it('should return converted currency values', async () => {
    const inputValue = 100

    const mockedFloatRatesClient = jest.fn().mockResolvedValue({
      usd: { rate: 1.2 },
      eur: { rate: 0.9 },
      inr: { rate: 85.5 }
    });

    const convertionObject = await currencyService(inputValue, mockedFloatRatesClient)

    expect(convertionObject).toStrictEqual({
      USD: 120.00,
      EUR: 90.00,
      INR: 8550.00
    })
  })
})
