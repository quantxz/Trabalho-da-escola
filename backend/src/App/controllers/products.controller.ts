import { Request, Response } from "express";
import prisma from "../configs/prisma";
import productsDto from "../dto/products.dto";

class productsController {
    public async register(req: Request, res: Response) {
        const { ...data }: productsDto = req.body
        
        const product = await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                category: data.category,
                description: data.description,
                quantity: data.quantity,
                supplier: data.supplier,
                status: data.status,
                brand: data.status,
                model: data.model,
            }
        })

        return res.status(200).json({
            message: "ok",
            status: 200,
            data: product
        })
    } 
}

export default productsController