import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.headers.user
        const password = req.headers.password
        console.log(user, password)
        if(!user || !password) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        return next()

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Something went wrong" })
    }
};