import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);
router.get("/users", userController.getAllUser);

router.post("/users", userController.createUser);
router.get("/specificUser/:id", userController.getSpecificUser);
router.patch("/updateUser/:id", userController.updateUser);
export const userRouter = { router };
