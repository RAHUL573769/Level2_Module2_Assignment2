// Creating User Interface
import { Response } from "express";
import { boolean } from "joi";

interface UserInfo {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Object[];
}
interface Output {
  success: boolean;
  message: string;
  data: any;
}
interface errorOutput {
  success: boolean;
  message: string;
  error: any;
}

interface Product1 {
  productName: object;
  price: number;
  quantity: number;
}
interface PostResponse {
  success: boolean;
  message: string;
  data: {
    userId: number;
    username: string;
    fullName: {
      firstName: string;
      lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: [string, string];
    address: {
      street: string;
      city: string;
      country: string;
    };
  };
}

interface DeleteResponse {
  success: boolean;
  message: string;
  data: any;
}

export {
  UserInfo,
  Output,
  errorOutput,
  Product1,
  PostResponse,
  DeleteResponse
};
