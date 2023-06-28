import { prismaClient } from '../../lib/prismaClient.js'

const checkUniqueUsername = async (uniqueUsername: string) => {
  const user = await prismaClient.user.findUnique({
    where: { unique_username: uniqueUsername },
  })

  if (user) return true
  else return false
}

const getUserByUsername = async (uniqueUsername: string) => {
  return await prismaClient.user.findUnique({
    where: {
      unique_username: uniqueUsername,
    },
  })
}

const getUserById = async (id: string) => {
  return await prismaClient.user.findUnique({
    where: {
      id,
    },
  })
}

const createUser = async (
  uniqueUsername: string,
  username: string,
  avatar: string,
  banner: string,
) => {
  return await prismaClient.user.create({
    data: {
      unique_username: uniqueUsername,
      username,
      avatar,
      banner,
    },
  })
}

const deleteUser = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}

export const userService = {
  getUserByUsername,
  getUserById,
  createUser,
  deleteUser,
  checkUniqueUsername,
}
