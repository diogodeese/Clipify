import { auth } from 'firebase-admin'
import { prismaClient } from '../config/prismaClient.js'

const checkUniqueUsername = async (uniqueUsername: string) => {
  const user = await prismaClient.user.findUnique({
    where: { uniqueUsername },
  })

  return !!user
}

const getUserByUsername = async (uniqueUsername: string) => {
  return await prismaClient.user.findUnique({
    where: { uniqueUsername },
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
      uniqueUsername: uniqueUsername,
      username,
      avatar,
      banner,
    },
  })
}

const updateUserUniqueUsername = async (
  user: auth.DecodedIdToken,
  uniqueUsername: string
) => {
  if (await checkUniqueUsername(uniqueUsername)) {
    return { error: 'This unique username is already being used' }
  }

  await prismaClient.user.update({
    data: { uniqueUsername },
    where: { email: user.email },
  })
}

const updateUserUsername = async (
  user: auth.DecodedIdToken,
  username: string
) => {
  await prismaClient.user.update({
    data: { username },
    where: { email: user.email },
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
