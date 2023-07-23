import { prismaClient } from '../../config/prismaClient.js'

export const del = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}
