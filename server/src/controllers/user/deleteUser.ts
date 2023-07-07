import { Request, Response } from 'express'
import userService from '../../services/user/index.ts'

export const deleteUser = async (request: Request, response: Response) => {
  const id: string = request.params.id
  userService.deleteUser(id)

  return response.json(id)
}
