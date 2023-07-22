import axios from 'axios'

const patch = async <T>(route: string, body: T) => {
  return await axios.patch(route, body)
}

export default patch
