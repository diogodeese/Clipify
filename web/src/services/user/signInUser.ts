import api from '@api/api'

const signInUser = async (email: string, password: string) => {
  try {
    const response = await api.post('http://localhost:4003/user/signIn', {
      email,
      password,
    })

    localStorage.setItem('token', response.data.token)

    return response.data
  } catch (error) {
    return error
  }
}

export default signInUser
