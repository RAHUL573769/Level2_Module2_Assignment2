import {
  UserInfo,
  Output,
  errorOutput,
  Product1
} from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import userSchema from "../models/user.model";

const printUser = async () => {
  console.log("Hello from User Database");
};

const createUser = async (data: UserInfo): Promise<UserInfo> => {
  const result = await UserModel.create(data);

  return result;
};

const getAllUser = async (): Promise<UserInfo[]> => {
  const result = await UserModel.aggregate([
    {
      $project: {
        userId: 1,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        address: 1
      }
    }
  ]);

  return result;
};

const getSpecificUser = async (
  id: string
): Promise<Output | errorOutput | undefined> => {
  const result = await UserModel.findById(id);

  if (result) {
    // Exclude the password field from the response
    const {
      password,
      username,
      isActive,
      userId,
      fullName,
      address,
      age,
      email,
      hobbies,
      orders
    } = result;
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
  } else {
    return {
      success: false,
      message: "User Not Found",
      error: {
        code: 404,
        description: "User not found!"
      }
    };
  }
};

const updateUser = async (
  id: string,
  data: UserInfo
): Promise<UserInfo | null> => {
  const result1 = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });

  return result1;
};

const appendProducts = async (
  id: string,
  data: UserInfo,
  newProducts: Object
): Promise<UserInfo | Output | errorOutput | Product1 | undefined> => {
  const {
    password,
    username,
    isActive,
    userId,
    fullName,
    address,
    age,
    email,
    hobbies,
    orders
  } = data;
  console.log("116", orders[0]);

  if (orders.length != 0) {
    let appendedProduct = orders.push(newProducts);
    const result1 = await UserModel.findByIdAndUpdate(id, {
      new: true,
      runValidators: true
    });
    return {
      productName: orders,
      price: 1234,
      quantity: 12
    };
  } else {
    return {
      success: false,
      message: "User Not Found",
      error: {
        code: 404,
        description: "User not found!"
      }
    };
  }
};

const getAllUsersOrder = async (): Promise<
  UserInfo[] | Output | errorOutput | Product1 | undefined
> => {
  const result = await UserModel.aggregate([
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
  } else {
    return {
      success: false,
      message: "User Not Found",
      error: {
        code: 404,
        description: "User not found!"
      }
    };
  }
};
const totalUserOrder = async (): Promise<
  UserInfo[] | Output | errorOutput | Product1 | undefined
> => {
  const result = await UserModel.aggregate([
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
      data: { totalUserOrder }
    };
  } else {
    return {
      success: false,
      message: "User Not Found",
      error: {
        code: 404,
        description: "User not found!"
      }
    };
  }
};

export const userServices = {
  printUser,
  createUser,
  getAllUser,
  getSpecificUser,
  updateUser,
  appendProducts,
  totalUserOrder
};
