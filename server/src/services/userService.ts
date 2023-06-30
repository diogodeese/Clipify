import { prismaClient } from '../config/prismaClient.js'

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
  banner: string
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

const updateUserUniqueUsername = async (id: string, uniqueUsername: string) => {
  if (await checkUniqueUsername(uniqueUsername)) {
    return { error: 'This unique username is already being used' }
  }

  await prismaClient.user.update({
    data: { unique_username: uniqueUsername },
    where: { id },
  })
}

const updateUserUsername = async (id: string, username: string) => {
  await prismaClient.user.update({
    data: username,
    where: { id },
  })
}

const deleteUser = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}

export const userService = {
  getUserByUsername,
  getUserById,
  createUser,
  updateUserUsername,
  updateUserUniqueUsername,
  deleteUser,
  checkUniqueUsername,
}
