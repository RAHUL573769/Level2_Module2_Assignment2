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

export const userController = {
  printUser
};
