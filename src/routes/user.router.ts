import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", userController.printUser);
router.get("/users", userController.getAllUser);

router.post("/users", userController.createUser);
router.get("/users/:id", userController.getSpecificUser);

router.put("/users/:id", userController.updateUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.patch("/users/:id/orders", userController.appendUser);

router.get("/users/:id/orders", userController.appendUser);
router.get("/users/:id/orders/total-price", userController.totalUser);

export const userRouter = { router };
