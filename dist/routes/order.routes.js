"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_controller_1 = __importDefault(require("../controllers/order.controller"));
var router = express_1.default.Router();
// Corrected route definitions
router.post("/", order_controller_1.default.createOrder);
router.get("/", order_controller_1.default.getAllOrders);
router.get("/:id", order_controller_1.default.getOrderById);
router.put("/:id", order_controller_1.default.updateOrder);
router.delete("/:id", order_controller_1.default.deleteOrder);
exports.default = router;
