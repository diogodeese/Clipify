import { Router } from 'express'
import { UserController } from './controllers/userController.js'

const router = Router()
const userController = new UserController()

router.get('/user/:id', userController.getUser)
router.post('/user', userController.createUser)
router.patch('/user/uniqueUsername', userController.updateUserUniqueUsername)
router.patch('/user/username', userController.updateUserUsername)
router.delete('/user/:id', userController.deleteUser)

export { router }
