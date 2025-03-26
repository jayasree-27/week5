"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var restaurant_controller_1 = __importDefault(require("../controllers/restaurant.controller"));
var router = express_1.default.Router();
router.post("/", restaurant_controller_1.default.createRestaurant);
router.get("/", restaurant_controller_1.default.getAllRestaurants);
router.get("/:id", restaurant_controller_1.default.getRestaurantById);
router.put("/:id", restaurant_controller_1.default.updateRestaurant);
router.delete("/:id", restaurant_controller_1.default.deleteRestaurant);
exports.default = router;
