"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, "Please Enter A Id"]
        // unique:[true,"Enter "]
    },
    username: {
        type: String,
        required: [true, "User Name is Required"],
        // trim: true,
        // maxlength: [20, "Please Enter User Name Less Than 20"],
        validate: {
            validator: function (value) {
                const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
                if (value !== firstStr) {
                    return false;
                }
                else {
                    return true;
                }
                console.log(value);
            },
            message: "{VALUE} Is not in Capitalized Format"
        }
    },
    password: {
        type: String,
        required: [true, "Password IS Required"],
        set: (x) => bcrypt_1.default.hashSync(x, bcrypt_1.default.genSaltSync(20))
    },
    fullName: {
        firstName: {
            type: String,
            // required: [true, "User Name is Required"],
            trim: true
            // validate: {
            //   validator: function (value: string) {
            //     const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
            //     if (value !== firstStr) {
            //       return false;
            //     } else {
            //       return true;
            //     }
            //     console.log(value);
            //   },
            //   message: "{VALUE} Is not in Capitalized Format"
            // }
        },
        lastName: {
            type: String
            // required: [true, "User Name is Required"],
            // trim: true,
            // validate: {
            //   validator: function (value: string) {
            //     const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
            //     if (value !== firstStr) {
            //       return false;
            //     } else {
            //       return true;
            //     }
            //     console.log(value);
            //   },
            //   message: "{VALUE} Is not in Capitalized Format"
            // }
        }
    },
    age: Number,
    email: {
        type: String,
        required: [true, "Email Is Required"]
        // unique: true,
        // validate: {
        //   validator: (value: string) => validator.isEmail(value),
        //   message: "{Value} is not a Valid Email"
        // }
    },
    isActive: Boolean,
    hobbies: {
        type: [String]
    },
    address: {
        street: String,
        city: String,
        country: String
    },
    orders: {
        type: [Object]
    }
});
const UserModel = (0, mongoose_1.model)("user", userSchema);
exports.default = UserModel;
