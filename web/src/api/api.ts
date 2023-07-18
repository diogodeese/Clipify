import { getToken } from '@utils/getToken'
import axios from 'axios'

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`

const get = async (route: string) => {
  return await axios.get(route)
}

const api = {
  get,
}

export default api
