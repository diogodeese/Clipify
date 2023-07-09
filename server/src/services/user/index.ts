import { checkUniqueUsername } from './checkUniqueUsername.ts'
import { createUser } from './createUser.ts'
import { deleteUser } from './deleteUser.ts'
import { getUserById } from './getUserById.ts'
import { getUserByUsername } from './getUserByUsername.ts'
import { signInUser } from './signInUser.ts'
import { updateUserUniqueUsername } from './updateUserUniqueUsername.ts'
import { updateUserUsername } from './updateUserUsername.ts'

const userService = {
  getUserByUsername,
  getUserById,
  signInUser,
  createUser,
  updateUserUsername,
  updateUserUniqueUsername,
  deleteUser,
  checkUniqueUsername,
}

export default userService
