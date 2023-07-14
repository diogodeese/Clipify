import { NavigationBar } from '@components/Navbar/navigationBar'
import { ErrorMessage } from '@components/errorMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpUserFormSchema = z.object({
  username: z.string().nonempty('Username is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email format is invalid')
    .toLowerCase(),
  password: z
    .string()
    .min(6, 'Your password must be at least 6 characters long'),
})

type SignUpUserFormData = z.infer<typeof signUpUserFormSchema>

export const SignUp = () => {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserFormData>({
    resolver: zodResolver(signUpUserFormSchema),
  })

  const signUpUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
        <form
          onSubmit={handleSubmit(signUpUser)}
          className="flex w-full max-w-sm flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="h-10 rounded border border-neutral-600 bg-neutral-700 px-3 shadow-sm focus:outline-none"
              type="username"
              {...register('username')}
            />
            {errors.username && (
              <ErrorMessage message={errors.username.message} />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              className="h-10 rounded border border-neutral-600 bg-neutral-700 px-3 shadow-sm focus:outline-none"
              type="email"
              {...register('email')}
            />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="h-10 rounded border border-neutral-600 bg-neutral-700 px-3 shadow-sm focus:outline-none"
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}
          </div>

          <button
            type="submit"
            className="h-10 gap-3 rounded bg-emerald-500 font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Sign up
          </button>
        </form>

        <pre>{output}</pre>
      </div>
    </>
  )
}
