// Testing Middleware

import {UnauthorizedError} from 'express-jwt'
import errorMiddleware from '../error-middleware'

test('responds with 401 for express-jwt UnauthorizedError', () => {
  const req = {}
  const res = {
    json: jest.fn(() => res),
    status: jest.fn(() => res),
  }
  const next = jest.fn()
  const error = new UnauthorizedError('fake_code', {
    message: 'Fake Error Message',
  })
  errorMiddleware(error, req, res, next)
  expect(next).not.toHaveBeenCalled()
  expect(res.status).toHaveBeenCalledWith(401)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({
    code: error.code,
    message: error.message,
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})

// 🐨 Write a test for the headersSent case

// 🐨 Write a test for the else case (responds with a 500)
