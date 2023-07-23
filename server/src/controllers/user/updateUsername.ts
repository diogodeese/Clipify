import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const updateUsername = async (request: Request, response: Response) => {
  const { username } = request.body

  userService.updateUsername(username)

  return response.status(200)
}
