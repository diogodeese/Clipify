import { NavigationBar } from '@components/Navbar/navigationBar'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email format is invalid')
    .toLowerCase(),
  password: z
    .string()
    .min(6, 'Your password must be at least 6 characters long'),
})

type SignInUserFormData = z.infer<typeof signInUserFormSchema>

export const SignIn = () => {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserFormData>({
    resolver: zodResolver(signInUserFormSchema),
  })

  const signInUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
        <form
          onSubmit={handleSubmit(signInUser)}
          className="flex w-full max-w-sm flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              className="h-10 rounded border border-neutral-600 bg-neutral-700 px-3 shadow-sm focus:outline-none"
              type="email"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              className="h-10 rounded border border-neutral-600 bg-neutral-700 px-3 shadow-sm focus:outline-none"
              type="password"
              {...register('password')}
            />
          </div>

          <button
            type="submit"
            className="h-10 gap-3 rounded bg-emerald-500 font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Sign in
          </button>
        </form>

        <pre>{output}</pre>
      </div>
    </>
  )
}
