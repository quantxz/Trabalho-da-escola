import { Router } from "express";   
import userController from "./App/controllers/User.controller";
const user = new userController()
const routes: Router = Router()

routes.post("/register", user.register)


export default routes