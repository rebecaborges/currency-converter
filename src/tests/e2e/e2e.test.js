const request = require('supertest')
const app = require('../../app.js')
const floatRatesMock = require('../../common/__mocks__/floatRates.mock.js')
const floatRatesClient = require('../../client/floatRates.js')

jest.mock('../../client/floatRates')

describe('GET /convert/BRL/:value', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should return the converted currency', async () => {
    await floatRatesClient.mockResolvedValue(floatRatesMock)

    await request(app)
      .get('/api/convert/BRL/100')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body = {
          USD: 20.45,
          EUR: 19,
          INR: 1686.34
        }
      })
  })
})
