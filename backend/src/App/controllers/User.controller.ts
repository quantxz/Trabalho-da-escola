import { Request, Response } from "express";
import prisma from "../configs/prisma";
import userDto from "../dto/user.dto";

class userController {

   async login(req: Request, res: Response) {
      try {
         const { ...data }: userDto = req.body

         const user = await prisma.user.findFirst({
            where: {
               email: data.email,
               password: data.password
            }
         })
         return res.status(200).json({
            message: "ok",
            status: 200,
            data: user
         })
      } catch(error: any) {
         console.error(error);
         return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
            error: error.message,
         });
      }
   }

    async register(req: Request, res: Response) {
        try {
           const { ...data }: userDto = req.body;
     
           const user = await prisma.user.create({
              data: {
                 name: data.name,
                 email: data.email,
                 password: data.password,
                 age: data.age,
              },
           });
     
           return res.status(200).json({
              message: 'ok',
              status: 200,
              data: user,
           });
        } catch (error: any) {
           console.error(error);
           return res.status(500).json({
              message: 'Internal Server Error',
              status: 500,
              error: error.message,
           });
        }
     }
}


export default userController