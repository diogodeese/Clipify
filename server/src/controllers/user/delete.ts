import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const del = async (request: Request, response: Response) => {
  const id: string = request.params.id
  userService.del(id)

  return response.json(id)
}
