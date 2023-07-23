import { User } from '@prisma/client'
import { prismaClient } from '../../config/prismaClient.js'
import { exclude } from '../../utils/exclude.js'

export const getByUniqueUsername = async (
  uniqueUsername: string,
  excludeFields?: Array<keyof User>
) => {
  const user = await prismaClient.user.findUnique({
    where: { uniqueUsername },
  })

  if (excludeFields) return exclude(user, excludeFields)
  else return user
}
