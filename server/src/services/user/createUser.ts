import { prismaClient } from '../../config/prismaClient.js'

export const createUser = async (
  email: string,
  password: string,
  uniqueUsername: string,
  username: string,
  avatar: string,
  banner: string
) => {
  return await prismaClient.user.create({
    data: {
      email,
      password,
      uniqueUsername,
      username,
      avatar,
      banner,
    },
  })
}
