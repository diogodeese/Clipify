import { User } from '@prisma/client'
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

const updateUser = async (id: string, updatedUser: User) => {
  const uniqueUsernameAlreadyExists = await checkUniqueUsername(
    updatedUser.unique_username
  )

  if (uniqueUsernameAlreadyExists) return { error: 'Duplicate unique username' }

  await prismaClient.user.update({ data: updatedUser, where: { id } })
}

const deleteUser = async (id: string) => {
  await prismaClient.user.delete({ where: { id } })
}

export const userService = {
  getUserByUsername,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  checkUniqueUsername,
}
