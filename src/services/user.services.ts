import UserInfo from "../interfaces/user.interface";
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
        address: 1,
        orders: 1
      }
    }
  ]);

  return result;
};

const getSpecificUser = async (id: string): Promise<UserInfo | null> => {
  const result = await UserModel.findById(id);

  return result;
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

export const userServices = {
  printUser,
  createUser,
  getAllUser,
  getSpecificUser,
  updateUser
};
