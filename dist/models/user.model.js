"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, "Please Enter A Id"]
        // unique:[true,"Enter "]
    },
    username: {
        type: String,
        required: [true, "User Name is Required"],
        trim: true,
        maxlength: [20, "Please Enter User Name Less Than 20"],
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
    }
});
