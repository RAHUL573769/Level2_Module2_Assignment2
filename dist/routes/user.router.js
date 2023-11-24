"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.get("/", user_controller_1.userController.printUser);
router.get("/users", user_controller_1.userController.getAllUser);
router.post("/users", user_controller_1.userController.createUser);
router.get("/specificUser/:id", user_controller_1.userController.getSpecificUser);
router.patch("/updateUser/:id", user_controller_1.userController.updateUser);
exports.userRouter = { router };
