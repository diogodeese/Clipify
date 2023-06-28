import { User } from '@prisma/client'
import { Request, Response } from 'express'
import { userService } from '../services/userService.js'

export class UserController {
  async getUser(request: Request, response: Response) {
    const id: string = request.params.id

    let user: User

    if (id.includes('@')) {
      user = await userService.getUserByUsername(id.replace('@', ''))
    } else {
      user = await userService.getUserById(id)
    }

    response.json(user)
  }

  async createUser(request: Request, response: Response) {
    const { uniqueUsername, username, avatar, banner } = request.body

    const uniqueUsernameAlreadyExists = await userService.checkUniqueUsername(
      uniqueUsername,
    )

    if (uniqueUsernameAlreadyExists)
      return response.json({ error: 'Duplicate Unique Username' })

    const user = await userService.createUser(
      uniqueUsername,
      username,
      avatar,
      banner,
    )

    return response.json(user)
  }

  async deleteUser(request: Request, response: Response) {
    const id: string = request.params.id
    userService.deleteUser(id)

    return response.json(id)
  }
}
