import axios from 'axios'

const get = async (route: string) => {
  return await axios.get(route)
}

export default get
