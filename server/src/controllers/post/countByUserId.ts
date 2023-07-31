import { Request, Response } from 'express'
import postService from '../../services/post/index.js'

export const countByUserId = async (request: Request, response: Response) => {
  const userId: string = request.params.userId

  const postCounter = postService.countByUserId(userId)

  return response.status(200).json({ postCounter })
}
