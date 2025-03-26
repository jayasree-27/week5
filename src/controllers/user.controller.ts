import { Request, Response } from "express";
import userService from "../services/userService";
import userValidation from "../validations/user.validation"
import RESPONSE from "../utils/response"

const createUser = async (req: Request, res: Response) => {
  try {

    const { name, email, password } = req.body;
    console.log(name, email,password);
    
    const newUser = await userService.createUserService(name, email, password);

    const { error } = await userValidation.createUserValidation.validate(req.body);

    if (error) {
      const errorMessage = error.details[0].message.replace(/['"]/g, "");
      RESPONSE.FailureResponse(res, 422, { message: errorMessage });
      return;
    }
    
    RESPONSE.SuccessResponse(res, 201, { message: "User created successfully", data: newUser });
  }
  catch (error: any) {
    console.error("Error creating user:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
}
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsersService();

    RESPONSE.SuccessResponse(res, 200, { message: "Users retrieved successfully", data: users });
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = (await userService.getUserByIdService(id));
    if (!id) {
      RESPONSE.FailureResponse(res, 404, { message: "user not found." });
      return;
    }
    await userService.getUserByIdService(id);

    RESPONSE.SuccessResponse(res, 200, { message: "User retrieved successfully", data: user });
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const existingUser = await userService.getUserByIdService(id);
    if (!existingUser) {
      RESPONSE.FailureResponse(res, 404, { message: "user not found." });
      return;
    }

    const updatedUser = await userService.updateUserService(id, { name, email });

    RESPONSE.SuccessResponse(res, 200, { message: "User updated successfully", data: updatedUser });

  } catch (error: any) {
    console.error("Error updating user:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};



const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingUser = await userService.getUserByIdService(id);
    if (!existingUser) {
      RESPONSE.FailureResponse(res, 404, { message: "user not found." });
      return;
    }
    await userService.deleteUserService(id);

    RESPONSE.SuccessResponse(res, 200, { message: "User deleted successfully"});
  } catch (error: any) {
    console.error("Error deleting user:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};

export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}

