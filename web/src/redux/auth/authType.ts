import { User } from '@interfaces/user'

export type AuthType = {
  auth: {
    user: User | null
    token: string
  }
}
