import { Request, Response } from "express";
import foodService from "../services/foodService";
import foodValidation from "../validations/food.validation";
import RESPONSE from "../utils/response";
import food from "../models/food.model"; // Import the food model
import { get } from "http";


const createFood =async(req:Request, res:Response)=>{
    try{
        const {name, price,restaurant}=req.body;
        const food = await foodService.createFoodService(name,price,restaurant);

        const { error } = await foodValidation.createFoodValidation.validate(req.body);

        if (error) {
          const errorMessage = error.details[0].message.replace(/['"]/g, "");
          RESPONSE.FailureResponse(res, 422, { message: errorMessage });
          return;
        }
        RESPONSE.SuccessResponse(res, 201, {
            message: "Order created successfully",
            data: food,
        });
    }
    catch (error: any) {
        console.error("Error creating user:", error.message);
        RESPONSE.FailureResponse(res, 500, { message: error.message });
    }
}
const getRestaurantsByFood = async (req: Request, res: Response) => {
    try {
        const { foodName } = req.query;
    
    
        if (!foodName || typeof foodName !== "string") {
            RESPONSE.FailureResponse(res, 400, { message: "Invalid food name provided." });
            return 
        }
        console.log("Searching for food:", foodName); 

        const foods=await foodService.getResByFoodService(foodName);

        if(!foods.length){
            RESPONSE.FailureResponse(res, 404, { message: "No restaurants found for this food item." });
        }
        const restaurants = foods.map(food => food.restaurant);

        RESPONSE.SuccessResponse(res, 200, { message: "Restaurants retrieved successfully", data: restaurants });
        return

    } catch (error: any) {
        console.error("Error fetching restaurants:", error.message);
        RESPONSE.FailureResponse(res, 500, { message: error.message });
        return
    }
};


const getAllFoods=async(req:Request, res:Response)=>{
    try {
        const foods = await foodService.getAllFoodsService();
    
        RESPONSE.SuccessResponse(res, 200, { message: "Users retrieved successfully", data: foods });
      } catch (error: any) {
        console.error("Error fetching users:", error.message);
        RESPONSE.FailureResponse(res, 500, { message: error.message });
      }
}

const getFoodById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const food = await foodService.getFoodByIdService(id);
      if (!id) {
        RESPONSE.FailureResponse(res, 404, { message: "user not found." });
        return;
      }
      await foodService.getFoodByIdService(id);
  
      RESPONSE.SuccessResponse(res, 200, { message: "User retrieved successfully", data: food });
    } catch (error: any) {
      console.error("Error fetching user:", error.message);
      RESPONSE.FailureResponse(res, 500, { message: error.message });
    }
  };

  

const updateFood = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {price} = req.body;
    
        const existingUser = await foodService.getFoodByIdService(id);
        if (!existingUser) {
          RESPONSE.FailureResponse(res, 404, { message: "user not found." });
          return;
        }
    
        const updatedfood= await foodService.updateFoodService(id, price);
    
        RESPONSE.SuccessResponse(res, 200, { message: "User updated successfully", data: updatedfood });
    
    } 
    catch (error: any) {
        console.error("Error updating user:", error.message);
        RESPONSE.FailureResponse(res, 500, { message: error.message });
      }
  };

  const deleteFood = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const existingUser = await foodService.getFoodByIdService(id);
      if (!existingUser) {
        RESPONSE.FailureResponse(res, 404, { message: "user not found." });
        return;
      }
      await foodService.deleteFoodService(id);
  
      RESPONSE.SuccessResponse(res, 200, { message: "User deleted successfully"});
    } catch (error: any) {
      console.error("Error deleting user:", error.message);
      RESPONSE.FailureResponse(res, 500, { message: error.message });
    }
};


export default{
    createFood,
    getAllFoods,
    getFoodById,
    getRestaurantsByFood,
    updateFood,
    deleteFood
}