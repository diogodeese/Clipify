import { checkUniqueUsername } from './checkUniqueUsername.js'
import { create } from './create.js'
import { del } from './delete.js'
import { getByEmail } from './getByEmail.js'
import { getById } from './getById.js'
import { getByUniqueUsername } from './getByUniqueUsername.js'
import { signIn } from './signIn.js'
import { updateUniqueUsername } from './updateUniqueUsername.js'
import { updateUsername } from './updateUsername.js'

const userService = {
  getByEmail,
  getById,
  getByUniqueUsername,
  signIn,
  create,
  updateUsername,
  updateUniqueUsername,
  del,
  checkUniqueUsername,
}

export default userService
