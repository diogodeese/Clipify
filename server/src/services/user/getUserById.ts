import { prismaClient } from '../../config/prismaClient.ts'

export const getUserById = async (id: string) => {
  return await prismaClient.user.findUnique({
    where: {
      id,
    },
  })
}
