import axios from 'axios'

const del = async (route: string) => {
  return await axios.delete(route)
}

export default del
