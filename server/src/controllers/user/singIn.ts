import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const signIn = async (request: Request, response: Response) => {
  const { email, password } = request.body

  const user = await userService.getByEmail(email)

  if (!user)
    return response.status(400).json({ message: 'Invalid email or password' })

  const verifyPassword = password === user.password

  if (!verifyPassword)
    return response.status(400).json({ message: 'Invalid email or password' })

  const token = await userService.signIn(user)
  return response.json({ user, token })
}
