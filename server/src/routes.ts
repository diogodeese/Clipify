import { Router } from 'express'
import userController from './controllers/user/index.js'
import { authenticateToken } from './middleware/authenticateToken.js'

const router = Router()

router.get('/user/:id', userController.getUser)
router.post('/signIn', userController.signInUser)
router.post('/user', userController.createUser)
router.patch(
  '/user/uniqueUsername',
  authenticateToken,
  userController.updateUserUniqueUsername
)
router.patch(
  '/user/username',
  authenticateToken,
  userController.updateUserUsername
)
router.delete('/user/:id', authenticateToken, userController.deleteUser)

export { router }
