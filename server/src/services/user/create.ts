import { prismaClient } from '../../config/prismaClient.js'

export const create = async (
  email: string,
  password: string,
  uniqueUsername: string,
  username: string
) => {
  return await prismaClient.user.create({
    data: {
      email,
      password,
      uniqueUsername,
      username,
      avatar: null,
      banner: null,
    },
  })
}
