import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const createUser = async (request: Request, response: Response) => {
  const { email, uniqueUsername, username, password, avatar, banner } =
    request.body

  const uniqueUsernameAlreadyExists = await userService.checkUniqueUsername(
    uniqueUsername
  )

  if (uniqueUsernameAlreadyExists)
    return response.json({ error: 'Duplicate Unique Username' })

  const user = await userService.createUser(
    email,
    uniqueUsername,
    username,
    password,
    avatar,
    banner
  )

  return response.json(user)
}
