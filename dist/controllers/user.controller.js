"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_services_1 = require("../services/user.services");
const joi_1 = __importDefault(require("joi"));
const printUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(user_services_1.userServices.printUser);
    }
    catch (error) {
        message: "There is an Error Printing The users";
        success: false;
        data: error;
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const result = await UserModel.create(inputData);
        const userJoiSchema = joi_1.default.object({
            userId: joi_1.default.number().required().messages({
                "any.required": "Please enter an ID",
                "number.base": "ID must be a number"
            }),
            username: joi_1.default.string()
                .required()
                .custom((value, helpers) => {
                const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
                if (value !== firstStr) {
                    return helpers.message({
                        message: "User Name Must Be Capitalized"
                    });
                }
                return value;
            }),
            password: joi_1.default.string().required().messages({
                "any.required": "Password is required"
            }),
            fullName: joi_1.default.object({
                firstName: joi_1.default.string().trim(),
                lastName: joi_1.default.string().trim()
            }),
            age: joi_1.default.number(),
            email: joi_1.default.string().email().required().messages({
                "any.required": "Email is required",
                "string.email": "Please enter a valid email address"
            }),
            isActive: joi_1.default.boolean(),
            hobbies: joi_1.default.array().items(joi_1.default.string()),
            address: joi_1.default.object({
                street: joi_1.default.string(),
                city: joi_1.default.string(),
                country: joi_1.default.string()
            }),
            orders: joi_1.default.array().items(joi_1.default.object())
        });
        console.log("Dta Added Succesfully");
        const inputData = req.body;
        const { error, value } = userJoiSchema.validate(inputData);
        if (error) {
            res.status(500).json({
                success: false,
                message: "User validation Failed",
                error: {
                    code: 404,
                    description: "Caanot Validate using Joi!"
                }
            });
        }
        const result = yield user_services_1.userServices.createUser(inputData);
        res.status(201).json({
            success: true,
            message: "User Created Succesfully",
            data: result
        });
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error
        res.status(201).json({
            success: false,
            message: "User Is not Created Succesfully"
        });
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.getAllUser();
        console.log("Data Found Succesfully");
        // console.log(result.filter);
        res.status(201).json({
            success: true,
            message: "User Fetched Succesfully",
            data: result
        });
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        res.status(500).json({
            success: false,
            message: "User Isnot Fetched Succesfully"
        });
    }
});
const getSpecificUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.userServices.getSpecificUser(id);
        res.status(201).json({
            success: true,
            message: "User Fetched Succesfully",
            data: result
        });
        console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        res.status(500).json({
            success: false,
            message: "User Not Found"
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userData = req.body;
        const result = yield user_services_1.userServices.updateUser(id, userData);
        console.log(" Updated  Succesfully");
        console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.userServices.deleteUser(id);
        console.log(" Data Deleted Succesfully");
        console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
    }
});
const appendUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userData = req.body;
        const newProduct = req.body;
        const result = yield user_services_1.userServices.appendProducts(id, userData, newProduct);
        console.log(" Updated  Succesfully");
        // console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
    }
});
const totalUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userData = req.body;
        const newProduct = req.body;
        // const result = await userServices.appendProducts(id, userData, newProduct);
        const result = yield user_services_1.userServices.totalUserOrder();
        console.log(" Updated  Succesfully");
        // console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
    }
});
exports.userController = {
    printUser,
    createUser,
    deleteUser,
    getAllUser,
    getSpecificUser,
    updateUser,
    appendUser,
    totalUser
};
