import { Request, Response } from 'express'
import userService from '../../services/user/index.js'

export const signInUser = async (request: Request, response: Response) => {
  const { email, password } = request.body

  const user = await userService.getUserByEmail(email)

  if (!user)
    return response.status(400).json({ message: 'Invalid email or password' })

  const verifyPassword = password === user.password

  if (!verifyPassword)
    return response.status(400).json({ message: 'Invalid email or password' })

  const token = await userService.signInUser(user)
  return response.json({ token })
}
