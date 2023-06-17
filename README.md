# Currency Converter API

## Description

Welcome to the Currency Converter API documentation. This API provides to convert the BRL currency to other currencies, currently available in USD, EUR and INR.

<br>

## Instalation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<br>

## Base URL
Base URL for all API endpoints: `https://localhost:3000`

<br>

## Endpoints
### Currency Converter BRL

BRL currency converter for other currencies.

- HTTP Method: [GET]
- Endpoint: `/api/convert/BRL/:value`

#### Parameters

| Parameter  | Type     | Description                              | Required |
| ---------- | -------- | ---------------------------------------- | -------- |
| `value`   | `number`   | The value to convert              | Yes

#### Request

Example request for the endpoint:
`GET /api/convert/BRL/529.99`

#### Response
Example response from Currency Converter BRL:

```json
{
  "USD": 108.40,
  "EUR": 100.75,
  "INR": 8937.46
}
```

### Documents
Documentation made with openAPI, which can be tested the API.

- HTTP Method: [GET]
- Endpoint: `/docs`

Example request for the endpoint:
`GET /docs`

<br>

## Disclaimer
The API used to pick up the exchange rate is http://www.floatrates.com, JSON is updated daily (once in 12 noon at 12pm/PM)