const request = require('supertest')
const app = require('../../app.js')
const floatRatesMock = require('../../common/__mocks__/floatRates.mock.js')
const floatRatesClient = require('../../client/floatRates.js')

jest.mock('../../client/floatRates')

describe('GET /convert/:currency/:value', () => {
  it('should return list of converted currencies', async () => {
    await floatRatesClient.mockResolvedValue(floatRatesMock)

    await request(app)
      .get('/api/convert/brl/100')
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
