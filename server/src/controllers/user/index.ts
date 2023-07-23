import { del } from './delete.js'
import { get } from './get.js'
import { signUp } from './signUp.js'
import { signIn } from './singIn.js'
import { updateUniqueUsername } from './updateUniqueUsername.js'
import { updateUsername } from './updateUsername.js'

const userController = {
  get,
  signIn,
  signUp,
  updateUniqueUsername,
  updateUsername,
  del,
}

export default userController
