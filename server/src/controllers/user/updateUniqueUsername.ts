import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const updateUniqueUsername = async (
  request: Request,
  response: Response
) => {
  const { uniqueUsername } = request.body

  userService.updateUniqueUsername(uniqueUsername)

  return response.status(200)
}
