import { User } from '@prisma/client'
import { Response } from 'express'
import { CustomRequest } from '../interfaces/customRequest.js'
import { userService } from '../services/userService.js'

export class UserController {
  async getUser(request: CustomRequest, response: Response) {
    const id: string = request.params.id
    let user: User

    if (id.includes('@')) {
      user = await userService.getUserByUsername(id.replace('@', ''))
    } else {
      user = await userService.getUserById(id)
    }

    response.json(user)
  }

  async createUser(request: CustomRequest, response: Response) {
    const { uniqueUsername, username, avatar, banner } = request.body

    const uniqueUsernameAlreadyExists = await userService.checkUniqueUsername(
      uniqueUsername
    )

    if (uniqueUsernameAlreadyExists)
      return response.json({ error: 'Duplicate Unique Username' })

    const user = await userService.createUser(
      uniqueUsername,
      username,
      avatar,
      banner
    )

    return response.json(user)
  }

  async updateUserUniqueUsername(request: CustomRequest, response: Response) {
    const id: string = request.params.id
    const { uniqueUsername } = request.body

    userService.updateUserUniqueUsername(id, uniqueUsername)

    return response.json(id)
  }

  async updateUserUsername(request: CustomRequest, response: Response) {
    const id: string = request.params.id
    const { username } = request.body

    userService.updateUserUsername(id, username)

    return response.json(id)
  }

  async deleteUser(request: CustomRequest, response: Response) {
    const id: string = request.params.id
    userService.deleteUser(id)

    return response.json(id)
  }
}
