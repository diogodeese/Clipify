import { User } from '@prisma/client'
import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const getUser = async (request: Request, response: Response) => {
  const id: string = request.params.id
  let user: User

  if (id.includes('@')) {
    user = await userService.getUserByUsername(id.replace('@', ''))
  } else {
    user = await userService.getUserById(id)
  }

  if (!user) return response.status(404)

  return response.json(user)
}
