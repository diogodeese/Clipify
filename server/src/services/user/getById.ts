import { User } from '@prisma/client'
import { prismaClient } from '../../config/prismaClient.js'
import { exclude } from '../../utils/exclude.js'

export const getById = async (
  id: string,
  excludeFields?: Array<keyof User>
) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  })

  if (excludeFields) return exclude(user, excludeFields)
  else return user
}
