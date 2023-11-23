import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);
router.get("/allUser", userController.getAllUser);
router.post("/user", userController.createUser);

export const userRouter = { router };
