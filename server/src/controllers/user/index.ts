import { createUser } from './createUser.js'
import { deleteUser } from './deleteUser.js'
import { getUser } from './getUser.js'
import { signInUser } from './singInUser.js'
import { updateUserUniqueUsername } from './updateUserUniqueUsername.js'
import { updateUserUsername } from './updateUserUsername.js'

const userController = {
  getUser,
  signInUser,
  createUser,
  updateUserUniqueUsername,
  updateUserUsername,
  deleteUser,
}

export default userController
