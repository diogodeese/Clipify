import { Response } from 'express'
import { CustomRequest } from '../../interfaces/customRequest.js'
import userService from '../../services/user/index.js'

export const updateUsername = async (
  request: CustomRequest,
  response: Response
) => {
  const { username } = request.body

  userService.updateUsername(username, request.user.id)

  return response.status(200)
}
