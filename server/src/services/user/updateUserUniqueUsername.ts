import { prismaClient } from '../../config/prismaClient.ts'
import { checkUniqueUsername } from './checkUniqueUsername.ts'

export const updateUserUniqueUsername = async (uniqueUsername: string) => {
  if (await checkUniqueUsername(uniqueUsername)) {
    return { error: 'This unique username is already being used' }
  }

  await prismaClient.user.update({
    data: { uniqueUsername },
    where: { email: 'asd' },
  })
}
