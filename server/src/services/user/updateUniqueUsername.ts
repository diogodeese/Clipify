import { prismaClient } from '../../config/prismaClient.js'
import { checkUniqueUsername } from './checkUniqueUsername.js'

export const updateUniqueUsername = async (uniqueUsername: string) => {
  if (await checkUniqueUsername(uniqueUsername)) {
    return { error: 'This unique username is already being used' }
  }

  await prismaClient.user.update({
    data: { uniqueUsername },
    where: { email: 'asd' },
  })
}
