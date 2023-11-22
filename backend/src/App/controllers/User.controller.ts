import { Request, Response } from "express";
import prisma from "../configs/prisma";
import userDto from "../dto/user.dto";

class userController {
    async register(req: Request, res: Response) {
       const { ...data }: userDto = req.body
       console.log(data)

        const user = await prisma.user.create({
            data:  {
                name: data.name,
                email: data.email,
                password: data.password,
                age: data.age
            }
        })

        return res.status(200).json(user)
    }
}


export default userController