import { getToken } from '@utils/getToken'
import axios from 'axios'
import del from './delete'
import get from './get'
import patch from './patch'
import post from './post'

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`

const api = {
  get,
  post,
  patch,
  del,
}

export default api
