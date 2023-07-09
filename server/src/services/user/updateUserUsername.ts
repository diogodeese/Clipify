import { prismaClient } from '../../config/prismaClient.js'

export const updateUserUsername = async (username: string) => {
  await prismaClient.user.update({
    data: { username },
    where: { email: 'asd' },
  })
}
