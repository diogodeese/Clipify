import { Router } from 'express'
import userController from './controllers/user/index.js'
import { authenticateToken } from './middleware/authenticateToken.js'

const router = Router()

router.get('/user/:id', userController.get)
router.post('/user/signIn', userController.signIn)
router.post('/user/signUp', userController.signUp)
router.patch(
  '/user/uniqueUsername',
  authenticateToken,
  userController.updateUniqueUsername
)
router.patch('/user/username', authenticateToken, userController.updateUsername)
router.delete('/user/:id', authenticateToken, userController.del)

export { router }
