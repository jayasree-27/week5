import express from "express";
import orderController from "../controllers/order.controller";

const router = express.Router();

// Corrected route definitions
router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

export default router;