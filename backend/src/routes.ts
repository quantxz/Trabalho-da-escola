import { Router } from "express";   
import userController from "./App/controllers/User.controller";
import productsController from "./App/controllers/products.controller";
const user = new userController()
const products = new productsController()
const routes: Router = Router()

routes.post("/register/user", user.register)
routes.post("/register/product", products.register)
routes.post("/login", user.login)

export default routes