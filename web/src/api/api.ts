import { getToken } from '@utils/getToken'
import axios from 'axios'

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`

interface ValidationError {
  message: string
  errors: Record<string, string[]>
}

const get = async (route: string) => {
  return await axios.get(route)
}

const post = async <T>(route: string, body: T) => {
  try {
    const response = await axios.post(route, body)

    return response
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      console.error(error.response)

      return error.response
    } else {
      console.error(error)
    }
  }
}

const patch = async <T>(route: string, body: T) => {
  return await axios.patch(route, body)
}

const del = async (route: string) => {
  return await axios.delete(route)
}

const api = {
  get,
  post,
  patch,
  del,
}

export default api
