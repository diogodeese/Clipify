import { getToken } from '@utils/getToken'
import axios from 'axios'

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`

const get = async (route: string) => {
  return await axios.get(route)
}

const post = async <T>(route: string, body: T) => {
  return await axios.post(route, body)
}

const api = {
  get,
  post,
}

export default api
