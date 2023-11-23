import { Schema, model } from "mongoose";
import UserInfo from "../interfaces/user.interface";
import validator from "validator";
import bcrypt from "bcrypt";
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
    // maxlength: [20, "Please Enter User Name Less Than 20"],
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
  },
  password: {
    type: String,
    required: [true, "Password IS Required"],
    set: (x: string | Buffer) => bcrypt.hashSync(x, bcrypt.genSaltSync(20))
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, "User Name is Required"],
      trim: true,
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
    },
    lastName: {
      type: String,
      required: [true, "User Name is Required"],
      trim: true,
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
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{Value} is not a Valid Email"
    }
  },
  isActive: {
    type: Boolean
  },
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

const UserModel = model<UserInfo>("user", userSchema);
export default UserModel;
