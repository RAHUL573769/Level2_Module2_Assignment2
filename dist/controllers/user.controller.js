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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_services_1 = require("../services/user.services");
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
        const inputData = req.body;
        const result = yield user_services_1.userServices.createUser(inputData);
        // const result = await UserModel.create(inputData);
        console.log("Dta Added Succesfully");
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
        console.log(error);
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.userServices.getAllUser();
        console.log("Data Found Succesfully");
        // console.log(result.filter);
        res.status(201).json({
            success: true,
            message: "User Created Succesfully",
            data: result
        });
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
    }
});
const getSpecificUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.userServices.getSpecificUser(id);
        console.log(result);
    }
    catch (error) {
        // message: "There is an Error Printing The users";
        // success: false;
        // data: error;
        console.log(error);
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
    getAllUser,
    getSpecificUser,
    updateUser,
    appendUser,
    totalUser
};
