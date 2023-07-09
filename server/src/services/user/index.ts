import { checkUniqueUsername } from './checkUniqueUsername.js'
import { createUser } from './createUser.js'
import { deleteUser } from './deleteUser.js'
import { getUserByEmail } from './getUserByEmail.js'
import { getUserById } from './getUserById.js'
import { getUserByUsername } from './getUserByUsername.js'
import { signInUser } from './signInUser.js'
import { updateUserUniqueUsername } from './updateUserUniqueUsername.js'
import { updateUserUsername } from './updateUserUsername.js'

const userService = {
  getUserByEmail,
  getUserById,
  getUserByUsername,
  signInUser,
  createUser,
  updateUserUsername,
  updateUserUniqueUsername,
  deleteUser,
  checkUniqueUsername,
}

export default userService
