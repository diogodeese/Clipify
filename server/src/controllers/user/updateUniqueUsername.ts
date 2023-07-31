import { Response } from 'express'
import { CustomRequest } from '../../interfaces/customRequest.js'
import userService from '../../services/user/index.js'

export const updateUniqueUsername = async (
  request: CustomRequest,
  response: Response
) => {
  const { uniqueUsername } = request.body

  userService.updateUniqueUsername(uniqueUsername)

  return response.status(200)
}
