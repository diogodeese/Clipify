import { User } from '@prisma/client'
import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { CustomRequest } from '../interfaces/customRequest.js'

export const authenticateToken = async (
  request: CustomRequest,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return response.status(401).json({ message: 'You are not authenticated' })
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user: User) => {
    if (error) {
      return response.status(403).json({ message: 'Error' })
    }

    request.user = user
    next()
  })
}
