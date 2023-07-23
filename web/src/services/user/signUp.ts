import api from '@api/index'

const signUp = async (
  email: string,
  password: string,
  username: string,
  uniqueUsername: string
) => {
  const response = await api.post('http://localhost:4003/user/signUp', {
    email,
    password,
    username,
    uniqueUsername,
  })

  return response
}

export default signUp
