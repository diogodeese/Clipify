import { prismaClient } from '../../config/prismaClient.js'

export const updateUsername = async (username: string, id: string) => {
  await prismaClient.user.update({
    data: { username },
    where: { id },
  })
}
