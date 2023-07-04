import { NextFunction, Response } from 'express'
import { admin } from '../config/firebase.js'
import { CustomRequest } from '../interfaces/customRequest.js'

export const decodeToken = async (
  request: CustomRequest,
  response: Response,
  next: NextFunction
) => {
  let token: string
  if (request.headers.authorization) {
    token = request.headers.authorization.split(' ')[1]

    admin
      .auth()
      .verifyIdToken(token)
      .then((decodeValue) => {
        if (decodeValue) {
          request.user = decodeValue
          next()
        } else {
          response.status(401)
        }
      })
      .catch((error) => {
        console.error(error)
        response.status(500)
      })
  } else {
    next()
  }
}
