import { User } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../../lib/prismaClient.js'

export class UserController {
  async getUser(request: Request, response: Response) {
    const id: string = request.params.id

    let uniqueUsername: string
    if (id.includes('@')) {
      uniqueUsername = id.replace('@', '')
    }

    let user: User

    if (uniqueUsername) {
      user = await prismaClient.user.findUnique({
        where: {
          unique_username: uniqueUsername,
        },
      })
    } else {
      user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      })
    }

    response.json(user)
  }

  async createUser(request: Request, response: Response) {
    const { uniqueUsername, username, avatar, banner } = request.body

    let existsUniqueUsername: boolean
    const u = await prismaClient.user.findUnique({
      where: { unique_username: uniqueUsername },
    })

    if (u) {
      existsUniqueUsername = true
    } else {
      existsUniqueUsername = false
    }
    if (existsUniqueUsername)
      return response.json({ error: 'Duplicate Unique Username' })

    const user = await prismaClient.user.create({
      data: {
        unique_username: uniqueUsername,
        username,
        avatar,
        banner,
      },
    })

    return response.json(user)
  }

  async deleteUser(request: Request, response: Response) {
    const id: string = request.params.id

    await prismaClient.user.delete({ where: { id } })

    return response.json(id)
  }
}
