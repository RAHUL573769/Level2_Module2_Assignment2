import { Schema } from "mongoose";
import UserInfo from "../interfaces/user.interface";
import validator from "validator";

const userSchema = new Schema<UserInfo>({
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
      validator: function (value: string) {
        const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
        if (value !== firstStr) {
          return false;
        } else {
          return true;
        }
        console.log(value);
      },
      message: "{VALUE} Is not in Capitalized Format"
    }
  }
});
