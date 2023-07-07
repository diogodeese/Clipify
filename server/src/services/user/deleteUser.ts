import { prismaClient } from '../../config/prismaClient.js'

export const deleteUser = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}
