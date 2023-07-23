import { Response } from 'express'
import { CustomRequest } from '../../interfaces/customRequest.js'
import userService from '../../services/user/index.js'

export const get = async (request: CustomRequest, response: Response) => {
  const id: string = request.params.id
  let user

  if (id.startsWith('@')) {
    user = await userService.getByUniqueUsername(id.replace('@', ''), [
      'password',
    ])
  } else if (id.includes('@')) {
    user = await userService.getByEmail(id, ['password'])
  } else {
    user = await userService.getById(id, ['password'])
  }

  if (!user) return response.status(404)

  return response.json(user)
}
