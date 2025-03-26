import mongoose from "mongoose";
import User from "../models/user.model";

const createUserService = async (name: string, email: string, password: string) => {
    return await User.create({ name, email, password });
};


const getAllUsersService = async () => {
  return await User.find();
};


const getUserByIdService = async (id: string) => {
  return await User.findById(id);
};

  
const updateUserService = async (id: string, updateData: any) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};


const deleteUserService = async (id: string) => {
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   throw new Error("Invalid user ID format");
    // }
  
    return await User.findByIdAndDelete(id);
};

export default{
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService
}
  