import { prismaClient } from '../../config/prismaClient.ts'

export const deleteUser = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}
