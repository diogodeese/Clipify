import { User } from '@prisma/client'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const signIn = async (user: User) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '72h' })
}
