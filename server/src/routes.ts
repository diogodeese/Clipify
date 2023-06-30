import { Router } from 'express'
import { UserController } from './controllers/userController.js'

const router = Router()
const userController = new UserController()

router.get('/user/:id', userController.getUser)
router.post('/user', userController.createUser)
router.patch('user/uniqueUsername/:id', userController.updateUserUniqueUsername)
router.patch('/user/username/:id', userController.updateUserUsername)
router.delete('/user/:id', userController.deleteUser)

export { router }
