import { Request, Response } from "express";
import orderService from "../services/orderService";
import RESPONSE from "../utils/response";
import orderValidation from "../validations/order.validation";
const serverError = "internal server error";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, foodItems, totalPrice } = req.body;
    const newOrder = await orderService.createOrderService(user, foodItems, totalPrice);

    const { error } = await orderValidation.createOrderValidation.validate(req.body);

    if (error) {
      const errorMessage = error.details[0].message.replace(/['"]/g, "");
      RESPONSE.FailureResponse(res, 422, { message: errorMessage });
      return;
    }
    
    RESPONSE.SuccessResponse(res, 201, {
      message: "Order created successfully",
      data: newOrder,
    });

  } catch (error: any) {
    console.error("Error creating order:", error.message);
    RESPONSE.FailureResponse(res, 500, {
      message: error.message || serverError,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrdersService();

    RESPONSE.SuccessResponse(res, 200, { message: "Order retrieved successfully", data: orders });
  }
  catch (err: any) {
    console.error("Error fetching orders", err.message);
    RESPONSE.FailureResponse(res, 500, { message: err.message });
  }
}


const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderByIdService(id);

    RESPONSE.SuccessResponse(res, 200, { message: "Order retrieved successfully", data: order });
  }
  catch (err: any) {
    console.error("Error fetching order", err.message);
    RESPONSE.FailureResponse(res, 500, { message: err.message });
  }
}


const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { foodItems, totalPrice } = req.body;
    const updatedOrder = await orderService.updateOrderService(id, { foodItems, totalPrice });

    RESPONSE.SuccessResponse(res, 200, { message: "Order updated Successfully", data: updatedOrder });
  }
  catch (error: any) {
    console.error("Error updating order", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });

  }
}


const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedOrder = await orderService.deleteOrderService(id);


    RESPONSE.SuccessResponse(res, 200, { message: "Order deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting order:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};

export default {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
}