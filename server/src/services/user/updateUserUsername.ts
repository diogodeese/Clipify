import { prismaClient } from '../../config/prismaClient.ts'

export const updateUserUsername = async (username: string) => {
  await prismaClient.user.update({
    data: { username },
    where: { email: 'asd' },
  })
}
