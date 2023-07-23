import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const signUp = async (request: Request, response: Response) => {
  const { email, password, uniqueUsername, username } = request.body

  const uniqueUsernameAlreadyExists = await userService.checkUniqueUsername(
    uniqueUsername
  )

  if (uniqueUsernameAlreadyExists)
    return response.json({ error: 'Duplicate Unique Username' })

  const user = await userService.create(
    email,
    password,
    uniqueUsername,
    username
  )

  return response.json(user)
}
