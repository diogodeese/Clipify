import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const createUser = async (request: Request, response: Response) => {
  console.log(request.body)
  const { email, password, uniqueUsername, username, avatar, banner } =
    request.body

  const uniqueUsernameAlreadyExists = await userService.checkUniqueUsername(
    uniqueUsername
  )

  if (uniqueUsernameAlreadyExists)
    return response.json({ error: 'Duplicate Unique Username' })

  const user = await userService.createUser(
    email,
    password,
    uniqueUsername,
    username,
    avatar,
    banner
  )

  return response.json(user)
}
