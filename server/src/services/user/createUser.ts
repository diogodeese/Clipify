import { prismaClient } from '../../config/prismaClient.js'

export const createUser = async (
  uniqueUsername: string,
  username: string,
  avatar: string,
  banner: string
) => {
  return await prismaClient.user.create({
    data: {
      uniqueUsername: uniqueUsername,
      username,
      avatar,
      banner,
    },
  })
}
