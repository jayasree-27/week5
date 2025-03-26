"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var order_routes_1 = __importDefault(require("./order.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var restaurant_routes_1 = __importDefault(require("./restaurant.routes"));
var food_routes_1 = __importDefault(require("./food.routes"));
router.use("/orders", order_routes_1.default);
router.use("/food", food_routes_1.default);
router.use("/user", user_routes_1.default);
router.use("/rest", restaurant_routes_1.default);
exports.default = router;
