import { prismaClient } from '../../config/prismaClient.js'

export const updateUsername = async (username: string) => {
  await prismaClient.user.update({
    data: { username },
    where: { email: 'asd' },
  })
}
