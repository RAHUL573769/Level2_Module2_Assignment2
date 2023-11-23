import { Request, Response } from "express";
import { userServices } from "../services/user.services";

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
    // console.log(inputData);
    const result = await userServices.createUser(inputData);

    console.log("Dta Added Succesfully");
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    console.log(error);
  }
};
export const userController = {
  printUser,
  createUser
};
