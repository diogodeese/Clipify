import { Request, Response } from 'express'
import userService from '../../services/user/index.ts'

export const updateUserUsername = async (
  request: Request,
  response: Response
) => {
  const { username } = request.body

  userService.updateUserUsername(username)

  return response.status(200)
}
