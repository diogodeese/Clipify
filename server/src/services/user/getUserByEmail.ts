import { prismaClient } from '../../config/prismaClient.js'

export const getUserByEmail = async (email: string) => {
  return await prismaClient.user.findUnique({
    where: {
      email,
    },
  })
}
