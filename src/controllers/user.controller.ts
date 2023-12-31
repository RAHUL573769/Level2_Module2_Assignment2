import e, { Request, Response } from "express";
import { userServices } from "../services/user.services";
import UserModel from "../models/user.model";
import Joi from "joi";

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
    // const result = await UserModel.create(inputData);

    //Joi Validation
    const userJoiSchema = Joi.object({
      userId: Joi.number().required().messages({
        "any.required": "Please enter an ID",
        "number.base": "ID must be a number"
      }),

      username: Joi.string()
        .required()
        .custom((value, helpers) => {
          const firstStr = value.charAt(0).toUpperCase() + value.slice(1);
          if (value !== firstStr) {
            return helpers.message({
              message: "User Name Must Be Capitalized"
            });
          }
          return value;
        }),

      password: Joi.string().required().messages({
        "any.required": "Password is required"
      }),

      fullName: Joi.object({
        firstName: Joi.string().trim(),
        lastName: Joi.string().trim()
      }),

      age: Joi.number(),

      email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Please enter a valid email address"
      }),

      isActive: Joi.boolean(),

      hobbies: Joi.array().items(Joi.string()),

      address: Joi.object({
        street: Joi.string(),
        city: Joi.string(),
        country: Joi.string()
      }),

      orders: Joi.array().items(Joi.object())
    });

    const inputData = req.body;
    const { error, value } = userJoiSchema.validate(inputData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "User validation Failed",
        error: {
          code: 404,
          description: "Canot Validate using Joi!"
        }
      });
    } //Joi Validation Finished
    const result = await userServices.createUser(inputData);
    console.log(result);
    res.status(201).json({
      success: true,
      message: "User Created Succesfully",
      data: result
    });
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error
    res.status(400).json({
      success: false,
      message: "User Is not Created Succesfully"
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUser();

    console.log("Data Found Succesfully");
    // console.log(result.filter);
    res.status(201).json({
      success: true,
      message: "User Fetched Succesfully",
      data: result
    });
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;
    res.status(500).json({
      success: false,
      message: "User Isnot Fetched Succesfully"
    });
  }
};

const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.getSpecificUser(id);
    res.status(201).json({
      success: true,
      message: "Specific User Fetched Succesfully",
      data: result
    });

    console.log(result);
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    res.status(500).json({
      success: false,
      message: "User Not Found"
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const result = await userServices.updateUser(id, userData);

    res.status(200).json({
      message: "Update Succesfully Done",
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      message: "Update Failed ",
      success: false
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.deleteUser(id);
    res.status(202).json(result);
    // res.status(200).json({
    //   message: "DeleteSuccesfully Done",
    //   success: true,
    //   data: result
    // });
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;
    res.status(400).json({
      message: "Delete Failed",
      success: false
    });
  }
};

const appendUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const newProduct = req.body;
    const result = await userServices.appendProducts(id, userData, newProduct);

    console.log(" Updated  Succesfully");
    // console.log(result);
  } catch (error) {
    // message: "There is an Error Printing The users";
    // success: false;
    // data: error;

    console.log(error);
  }
};
const totalUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const newProduct = req.body;
    // const result = await userServices.appendProducts(id, userData, newProduct);
    const result = await userServices.totalUserOrder();
    console.log(" Updated  Succesfully");
    // console.log(result);
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
  deleteUser,
  getAllUser,
  getSpecificUser,
  updateUser,
  appendUser,
  totalUser
};
