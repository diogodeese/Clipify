import api from '@api/index'

const get = async (id: string) => {
  const response = await api.get(`http://localhost:4003/user/${id}`)

  return response.data
}

export default get
