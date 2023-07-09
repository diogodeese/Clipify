import { prismaClient } from '../../config/prismaClient.ts'

export const getUserByUsername = async (uniqueUsername: string) => {
  return await prismaClient.user.findUnique({
    where: { uniqueUsername },
  })
}
