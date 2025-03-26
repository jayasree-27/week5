"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var food_controller_1 = __importDefault(require("../controllers/food.controller"));
var router = express_1.default.Router();
router.post("/", food_controller_1.default.createFood);
router.get("/getall", food_controller_1.default.getAllFoods);
router.get("/:id", food_controller_1.default.getFoodById);
router.put("/:id", food_controller_1.default.updateFood);
router.delete("/:id", food_controller_1.default.deleteFood);
router.get("/", food_controller_1.default.getRestaurantsByFood);
exports.default = router;
