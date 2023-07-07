import { prismaClient } from '../../config/prismaClient.js'

export const getUserByUsername = async (uniqueUsername: string) => {
  return await prismaClient.user.findUnique({
    where: { uniqueUsername },
  })
}
