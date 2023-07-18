import api from '@api/api'

const getUser = async (id: string) => {
  const response = await api.get(`http://localhost:4003/user/${id}`)

  return response.data
}

export default getUser
