const { currencyController } = require('../../controllers/controller.js')
const { currencyService } = require('../../services/service.js')
jest.mock('../../services/service.js')

describe('currencyController', () => {
  it('should return a JSON response with the result of the currencyService', async () => {
    const inputValue = {
      params: {
        currency: 'brl',
        value: '100'
      }
    }

    const res = { json: jest.fn() }

    const convertedCurrency = {
      EUR: 19.01,
      USD: 20.52,
      INR: 1689.2,
    }

    await currencyService.mockImplementation(() => convertedCurrency)

    await currencyController(inputValue, res)

    expect(res.json).toHaveBeenCalledWith(convertedCurrency)
  })
})
