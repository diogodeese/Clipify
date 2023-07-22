import { z } from 'zod'

export const signUpValidation = z.object({
  username: z.string().nonempty('Username is required'),
  uniqueUsername: z.string().nonempty('Unique username is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email format is invalid')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Your password must be at least 6 characters long'),
})
