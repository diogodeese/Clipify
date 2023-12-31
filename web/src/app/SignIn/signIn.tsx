import { Form } from '@components/Form/index'
import { NavigationBar } from '@components/Navbar/navigationBar'
import { zodResolver } from '@hookform/resolvers/zod'
import { userService } from '@services/user'
import { setToken } from '@utils/setToken'
import { signInValidation } from '@validations/signInValidation'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setCredentials } from 'src/redux/auth/authSlice'
import { z } from 'zod'

type SignInValidationType = z.infer<typeof signInValidation>

export const SignIn = () => {
  const dispatch = useDispatch()

  const signInUserForm = useForm<SignInValidationType>({
    resolver: zodResolver(signInValidation),
  })

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = signInUserForm

  const signInUser = async (data: SignInValidationType) => {
    const response = await userService.signIn(data.email, data.password)

    if (response) {
      switch (response.status) {
        case 200:
          console.log(response.data)
          setToken(response.data.token)
          dispatch(
            setCredentials({
              user: response.data.user,
              token: response.data.token,
            }),
          )
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
        <FormProvider {...signInUserForm}>
          <form
            onSubmit={handleSubmit(signInUser)}
            className="flex w-full max-w-sm flex-col gap-4"
          >
            <Form.ErrorMessage field="root" />

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
              Sign in
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}
