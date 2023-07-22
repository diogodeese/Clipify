import api from '@api/api'

const signInUser = async (email: string, password: string) => {
  const response = await api.post('http://localhost:4003/user/signIn', {
    email,
    password,
  })

  return response
}

export default signInUser
