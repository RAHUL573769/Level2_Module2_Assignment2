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
exports.userServices = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const printUser = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hello from User Database");
});
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.create(data);
        const { password, username, isActive, userId, fullName, address, age, email, hobbies, orders } = result;
        return {
            success: true,
            message: "User created successfully!",
            data: {
                userId: userId,
                username: username,
                fullName: {
                    firstName: fullName.firstName,
                    lastName: fullName.lastName
                },
                age: age,
                email: email,
                isActive: isActive,
                hobbies: [hobbies[0], hobbies[1]],
                address: {
                    street: address.street,
                    city: address.city,
                    country: address.country
                }
            }
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Data Creation Failed",
            error: "Failed"
        };
    }
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.aggregate([
        {
            $project: {
                username: 1,
                fullName: 1,
                age: 1,
                email: 1,
                address: 1
            }
        }
    ]);
    return result;
});
const getSpecificUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findById(id);
    if (result) {
        // Exclude the password field from the response
        const { password, username, isActive, userId, fullName, address, age, email, hobbies, orders } = result;
        return {
            success: true,
            message: "User retrieved successfully.",
            data: {
                userId: userId,
                username: username,
                fullName: fullName,
                age: age,
                email: email,
                isActive: isActive,
                hobbies: hobbies,
                address: address,
                orders: {
                    orders
                }
            }
        };
    }
    else {
        return {
            success: false,
            message: "User Not Found",
            error: {
                code: 404,
                description: "User not found!"
            }
        };
    }
});
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result1 = yield user_model_1.default.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });
    return result1;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result1 = yield user_model_1.default.findByIdAndDelete(id);
    if (result1) {
        return {
            success: true,
            message: "User deleted successfully!",
            data: null
        };
    }
    else {
        return {
            success: false,
            message: "User Deletion Failed",
            data: "User Deletion Failed"
        };
    }
});
const appendProducts = (id, data, newProducts) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, username, isActive, userId, fullName, address, age, email, hobbies, orders } = data;
    console.log("116", orders[0]);
    if (orders.length != 0) {
        let appendedProduct = orders.push(newProducts);
        const result1 = yield user_model_1.default.findByIdAndUpdate(id, {
            new: true,
            runValidators: true
        });
        return {
            productName: orders,
            price: 1234,
            quantity: 12
        };
    }
    else {
        return {
            success: false,
            message: "Appending Products Failed",
            error: {
                code: 404,
                description: "User not found!"
            }
        };
    }
});
const getAllUsersOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.aggregate([
        {
            $project: {
                orders: 1
            }
        }
    ]); //aggregate finished
    if (result) {
        return {
            productName: {},
            price: 23.56,
            quantity: 2
        };
    }
    else {
        return {
            success: false,
            message: "User Order Calculation Found",
            error: {
                code: 404,
                description: "User not found!"
            }
        };
    }
});
const totalUserOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.aggregate([
        {
            $project: {
                orders: 1
            }
        }
    ]); //aggregate finished
    if (result) {
        result.forEach((price) => {
            let finalPrice = 0;
            const priceCalculation = price.orders[0].price;
            const totalUserOrder = finalPrice + priceCalculation;
        });
        return {
            success: true,
            message: "Total price calculated successfully!",
            data: { totalPrice: totalUserOrder }
        };
    }
    else {
        return {
            success: false,
            message: "Total price Calculation Failed",
            error: {
                code: 404,
                description: "User not found!"
            }
        };
    }
});
exports.userServices = {
    printUser,
    createUser,
    getAllUser,
    deleteUser,
    getSpecificUser,
    updateUser,
    appendProducts,
    totalUserOrder
};
