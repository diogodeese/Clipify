import { Form } from '@components/Form/index'
import { NavigationBar } from '@components/Navbar/navigationBar'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Email format is invalid')
    .toLowerCase(),
  password: z
    .string()
    .min(6, 'Every password must be at least 6 characters long'),
})

type SignInUserFormData = z.infer<typeof signInUserFormSchema>

export const SignIn = () => {
  const [output, setOutput] = useState('')

  const signInUserForm = useForm<SignInUserFormData>({
    resolver: zodResolver(signInUserFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = signInUserForm

  const signInUser = async (data: SignInUserFormData) => {
    console.log(data)

    axios.post('http://localhost:4003/user/signIn', {
      data,
    })

    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
        <FormProvider {...signInUserForm}>
          <form
            onSubmit={handleSubmit(signInUser)}
            className="flex w-full max-w-sm flex-col gap-4"
          >
            <Form.Field>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input type="email" name="email" />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input type="password" name="password" />
              <Form.ErrorMessage field="password" />
            </Form.Field>

            {/* <div className="flex flex-col gap-1">
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
          </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 gap-3 rounded bg-emerald-500 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Sign in
            </button>
          </form>
        </FormProvider>

        {output && (
          <pre className="rounded-lg bg-zinc-800 p-6 text-sm text-zinc-100">
            {output}
          </pre>
        )}
      </div>
    </>
  )
}
