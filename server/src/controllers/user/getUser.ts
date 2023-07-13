import { User } from '@prisma/client'
import { Response } from 'express'
import { CustomRequest } from '../../interfaces/customRequest.js'
import userService from '../../services/user/index.js'

export const getUser = async (request: CustomRequest, response: Response) => {
  const id: string = request.params.id
  let user: User

  if (id.includes('@')) {
    user = await userService.getUserByUsername(id.replace('@', ''))
  } else {
    user = await userService.getUserById(id)
  }

  if (user.id === request.user.id) {
    console.log('same')
  } else {
    console.log('diff')
  }

  if (!user) return response.status(404)

  return response.json(user)
}
