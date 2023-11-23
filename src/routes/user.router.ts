import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);

router.post("/user", userController.createUser);

export const userRouter = { router };
