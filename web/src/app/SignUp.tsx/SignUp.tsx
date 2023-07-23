import { Form } from '@components/Form/index'
import { NavigationBar } from '@components/Navbar/navigationBar'
import { zodResolver } from '@hookform/resolvers/zod'
import { userService } from '@services/user'
import { signUpValidation } from '@validations/signUpValidation'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

type SignUpValidationType = z.infer<typeof signUpValidation>

export const SignUp = () => {
  const signUpUserForm = useForm<SignUpValidationType>({
    resolver: zodResolver(signUpValidation),
  })

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = signUpUserForm

  const signUpUser = async (data: SignUpValidationType) => {
    const response = await userService.signUp(
      data.email,
      data.password,
      data.username,
      data.uniqueUsername
    )

    if (response) {
      switch (response.status) {
        case 200:
          console.log(response.data)
          break

        case 400:
          console.log(response.data.message)
          setError('root', { message: response.data.message })
          break
      }
    }
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
      </div>
    </>
  )
}
