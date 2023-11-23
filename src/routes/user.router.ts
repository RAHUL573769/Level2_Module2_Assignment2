import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);

export const userRouter = { router };
