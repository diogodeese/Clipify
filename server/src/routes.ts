import { Router } from 'express'
import postController from './controllers/post/index.js'
import userController from './controllers/user/index.js'
import { authenticateToken } from './middleware/authenticateToken.js'

const router = Router()

/* User Routes */
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

/* Post Routes */
router.get('/post/countByUserId/:id', postController.countByUserId)

export { router }
