import { Request } from 'express'
import { auth } from 'firebase-admin'

export interface CustomRequest extends Request {
  user?: auth.DecodedIdToken
}
