import { prismaClient } from '../../config/prismaClient.js'

export const countByUserId = async (userId: string) => {
  const postCounter = await prismaClient.post.count({ where: { userId } })

  return postCounter
}
