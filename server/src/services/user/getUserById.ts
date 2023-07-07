import { prismaClient } from '../../config/prismaClient.js'

export const getUserById = async (id: string) => {
  return await prismaClient.user.findUnique({
    where: {
      id,
    },
  })
}
