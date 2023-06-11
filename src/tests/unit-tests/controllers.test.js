const request = require("supertest")
const baseURL = "http://localhost:3000/api"

const { currencyController } = require('../../controllers/controller.js')
const { currencyService } = require('../../services/service.js')

// jest.mock('../../controllers/controller.js', () => {
//   return {
//     currencyController: jest.fn(),
//     currencyService: jest.fn()
//   };
// });

it("should return 200", async () => {
  const response = await request(baseURL).get("/ping");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe(JSON.stringify({ "message": "pong" }));
});

describe('Controller', () => {
  describe('should return a JSON with status 200', () => {
    it("should return", async () => {
      const serviceResponse = {
        "USD": "0.20",
        "EUR": "0.19",
        "INR": "16.69"
      }
      // jest.spyOn(currencyController, 'currencyController').mockResolvedValueOnce(serviceResponse);
      jest.spyOn(currencyService, 'currencyService').mockImplementation(() => serviceResponse)
      // const mReq = { params: { value: '1' } };
      // const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };

      await currencyController(mReq, mRes);
      expect(currencyController.currencyController).toBeCalledWith(serviceResponse);
    });
  })
})
