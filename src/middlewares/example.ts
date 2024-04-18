import { RequestHandler, Request, Response, NextFunction } from 'express'

const helloFriend: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log('middlware hello friend')
  next()
}

export default helloFriend
