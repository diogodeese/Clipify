import { prismaClient } from '../../config/prismaClient.js'

export const checkUniqueUsername = async (uniqueUsername: string) => {
  const user = await prismaClient.user.findUnique({
    where: { uniqueUsername },
  })

  return !!user
}
