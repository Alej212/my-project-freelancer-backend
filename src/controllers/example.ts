import { Request, Response } from "express";

const helloFriend = (req: Request, res: Response) => {
    res.send('hello, friend we are in the example route')
}

export default helloFriend;