import UserInfo from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import userSchema from "../models/user.model";

const printUser = async () => {
  console.log("Hello from User Database");
};

const createUser = async (data: UserInfo): Promise<UserInfo> => {
  const result = await UserModel.create(data);
  console.log("Hi");
  return result;
};

export const userServices = {
  printUser,
  createUser
};