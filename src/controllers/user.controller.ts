import { Request, Response } from "express";
import { userServices } from "../services/user.services";
import UserModel from "../models/user.model";

const printUser = async (req: Request, res: Response) => {
  try {
    res.send(userServices.printUser);
  } catch (error) {
    message: "There is an Error Printing The users";
    success: false;
    data: error;
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const inputData = req.body;
    const result = await userServices.createUser(inputData);
    // const result = await UserModel.create(inputData);

    console.log("Dta Added Succesfully");

    res.status(201).json({
      success: true,
      message: "User Created Succesfully",
      data: result
    });
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error
    console.log(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUser();

    console.log("Data Found Succesfully");
    // console.log(result.filter);
    res.status(201).json({
      success: true,
      message: "User Created Succesfully",
      data: result
    });
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    console.log(error);
  }
};

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.getSpecificUser(id);
    console.log(result);
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    console.log(error);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const result = await userServices.updateUser(id, userData);

    console.log(" Updated  Succesfully");
    console.log(result);
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    console.log(error);
  }
};

export const userController = {
  printUser,
  createUser,
  getAllUser,
  getSpecificUser,
  updateUser
};
