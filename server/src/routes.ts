import { Router } from 'express'
import userController from './controllers/user/index.js'

const router = Router()

router.get('/user/:id', userController.getUser)
router.post('/signIn', userController.signInUser)
router.post('/user', userController.createUser)
router.patch('/user/uniqueUsername', userController.updateUserUniqueUsername)
router.patch('/user/username', userController.updateUserUsername)
router.delete('/user/:id', userController.deleteUser)

export { router }
