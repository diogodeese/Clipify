import { z } from 'zod'

export const signInValidation = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email format is invalid')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Every password must be at least 6 characters long'),
})
