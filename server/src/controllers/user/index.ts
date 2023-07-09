import { createUser } from './createUser.ts'
import { deleteUser } from './deleteUser.ts'
import { getUser } from './getUser.ts'
import { signInUser } from './singInUser.ts'
import { updateUserUniqueUsername } from './updateUserUniqueUsername.ts'
import { updateUserUsername } from './updateUserUsername.ts'

const userController = {
  getUser,
  signInUser,
  createUser,
  updateUserUniqueUsername,
  updateUserUsername,
  deleteUser,
}

export default userController
