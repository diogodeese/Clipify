import { NextFunction, Response } from 'express'

export const authenticateToken = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers
  console.log('token: ', token)
}
