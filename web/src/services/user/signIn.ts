import api from '@api/index'

const signIn = async (email: string, password: string) => {
  const response = await api.post('http://localhost:4003/user/signIn', {
    email,
    password,
  })

  return response
}

export default signIn
