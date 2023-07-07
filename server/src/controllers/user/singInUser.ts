import { Request, Response } from 'express'
import userService from '../../services/user/index.ts'

export const signInUser = async (request: Request, response: Response) => {
  const { username, password } = request.body

  if (username === 'asd' && password === 'asd') {
    const id = '32a03719-1022-45de-b83f-aba2aefbedfe'
    const user = await userService.getUserByUsername(id)
    const token = await userService.signInUser(user)
    return response.json({ token })
  } else {
    return response.json({ error: 'error' })
  }
}
