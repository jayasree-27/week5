import mongoose from "mongoose";
import Order from "../models/order.model";
import { populate } from "dotenv";

const createOrderService = async (user: string, foodItems: string[], totalPrice: number) => {
  return (await Order.create({ user, foodItems, totalPrice }));
};

const getAllOrdersService = async () => {
  return await Order.find()
      .populate("user","name email")
      .populate({
        path: "foodItems.food",
        populate:{
          path:"restaurant",
          select :"name location"
        }
      })
      // .sort({createdAt :-1}) //sort newest orders
      // .select("-__v")
      // .lean();
}


const getOrderByIdService = async (id: string) => {
  return await Order.findById(id)
    .populate("user","name email")
    .populate("foodItems.food","name price");
};

const updateOrderService = async (id: string, updateData: any) => {
  return await Order.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOrderService = async (id: string) => {
  return await Order.findByIdAndDelete(id);
}


export default {
  createOrderService,
  getAllOrdersService,
  getOrderByIdService,
  updateOrderService,
  deleteOrderService
}