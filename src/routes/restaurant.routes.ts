import express from "express";
import restaurantController from "../controllers/restaurant.controller";


const router=express.Router();

router.post("/",restaurantController.createRestaurant);
router.get("/",restaurantController.getAllRestaurants);
router.get("/:id",restaurantController.getRestaurantById);
router.put("/:id",restaurantController.updateRestaurant);
router.delete("/:id",restaurantController.deleteRestaurant);

export default router;
 