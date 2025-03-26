import express from "express";
import foodController from "../controllers/food.controller";

const router =express.Router();

router.post("/",foodController.createFood);
router.get("/getall",foodController.getAllFoods);
router.get("/:id",foodController.getFoodById);
router.put("/:id",foodController.updateFood);
router.delete("/:id",foodController.deleteFood);
router.get("/",foodController.getRestaurantsByFood);

export default router;
