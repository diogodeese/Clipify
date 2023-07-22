import axios from 'axios'

interface ValidationError {
  message: string
  errors: Record<string, string[]>
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

export default post
