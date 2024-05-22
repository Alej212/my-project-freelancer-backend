import { Request, Response } from 'express'

const products = (req: Request, res: Response): void => {
  res.send('this its products')
}

export default products
