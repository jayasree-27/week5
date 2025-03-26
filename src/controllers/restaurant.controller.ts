import { Request, Response } from "express";
import restaurantService from "../services/restaurantService";
import restaurantValidation from "../validations/restaurant.validation";
import RESPONSE from "../utils/response";


const createRestaurant = async (req: Request, res: Response) => {
    try {
        const { name,location, rating } = req.body;
    console.log(name, location ,rating);
    
    const newUser = await restaurantService.createResService(name,location ,rating);

    const { error } = await restaurantValidation.createResValidation.validate(req.body);

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

const getAllRestaurants=async(req:Request, res:Response)=>{
    try {
        const users = await restaurantService.getAllResService();
    
        RESPONSE.SuccessResponse(res, 200, { message: "Users retrieved successfully", data: users });
      } catch (error: any) {
        console.error("Error fetching users:", error.message);
        RESPONSE.FailureResponse(res, 500, { message: error.message });
      }
}

const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await restaurantService.getResByIdService(id);
    if (!id) {
      RESPONSE.FailureResponse(res, 404, { message: "user not found." });
      return;
    }
    await restaurantService.getResByIdService(id);

    RESPONSE.SuccessResponse(res, 200, { message: "User retrieved successfully", data: user });
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    RESPONSE.FailureResponse(res, 500, { message: error.message });
  }
};


const updateRestaurant = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { rating,location} = req.body;
  
      const existingUser = await restaurantService.getResByIdService(id);
      if (!existingUser) {
        RESPONSE.FailureResponse(res, 404, { message: "user not found." });
        return;
      }
  
      const updatedUser = await restaurantService.updateResService(id, { rating,location });
  
      RESPONSE.SuccessResponse(res, 200, { message: "User updated successfully", data: updatedUser });
  
    } catch (error: any) {
      console.error("Error updating user:", error.message);
      RESPONSE.FailureResponse(res, 500, { message: error.message });
    }
  };

  const deleteRestaurant = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const existingUser = await restaurantService.getResByIdService(id);
      if (!existingUser) {
        RESPONSE.FailureResponse(res, 404, { message: "user not found." });
        return;
      }
      await restaurantService.deleteResService(id);
  
      RESPONSE.SuccessResponse(res, 200, { message: "User deleted successfully"});
    } catch (error: any) {
      console.error("Error deleting user:", error.message);
      RESPONSE.FailureResponse(res, 500, { message: error.message });
    }
};




export default{
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
}

