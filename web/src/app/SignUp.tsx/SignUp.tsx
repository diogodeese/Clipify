import { Form } from '@components/Form/index'
import { NavigationBar } from '@components/Navbar/navigationBar'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpUserFormSchema = z.object({
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

type SignUpUserFormData = z.infer<typeof signUpUserFormSchema>

export const SignUp = () => {
  const [output, setOutput] = useState('')

  const signUpUserForm = useForm<SignUpUserFormData>({
    resolver: zodResolver(signUpUserFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = signUpUserForm

  const signUpUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-10 py-32">
        <FormProvider {...signUpUserForm}>
          <form
            onSubmit={handleSubmit(signUpUser)}
            className="flex w-full max-w-sm flex-col gap-4"
          >
            <Form.Field>
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Input type="text" name="username" />
              <Form.ErrorMessage field="username" />
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="uniqueUsername">Unique Username</Form.Label>
              <Form.Input type="text" name="uniqueUsername" />
              <Form.ErrorMessage field="uniqueUsername" />
            </Form.Field>

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

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 gap-3 rounded bg-emerald-500 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Sign up
            </button>
          </form>
        </FormProvider>

        <pre>{output}</pre>
      </div>
    </>
  )
}
