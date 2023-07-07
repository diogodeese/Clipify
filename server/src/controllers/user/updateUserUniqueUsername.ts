import { Request, Response } from 'express'
import userService from '../../services/user/index.ts'

export const updateUserUniqueUsername = async (
  request: Request,
  response: Response
) => {
  const { uniqueUsername } = request.body

  userService.updateUserUniqueUsername(uniqueUsername)

  return response.status(200)
}
