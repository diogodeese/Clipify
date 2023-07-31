import { Response } from 'express'
import { CustomRequest } from '../../interfaces/customRequest.js'
import userService from '../../services/user/index.js'

export const del = async (request: CustomRequest, response: Response) => {
  const id: string = request.params.id

  userService.del(id)

  return response.json(id)
}
