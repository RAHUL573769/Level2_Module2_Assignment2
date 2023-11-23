import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);
router.get("/allUser", userController.getAllUser);

router.post("/user", userController.createUser);
router.get("/specificUser/:id", userController.getSpecificUser);
router.patch("/updateUser/:id", userController.updateUser);
export const userRouter = { router };
