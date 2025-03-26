"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var foodService_1 = __importDefault(require("../services/foodService"));
var food_validation_1 = __importDefault(require("../validations/food.validation"));
var response_1 = __importDefault(require("../utils/response"));
var createFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, price, restaurant, food_1, error, errorMessage, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, price = _a.price, restaurant = _a.restaurant;
                return [4 /*yield*/, foodService_1.default.createFoodService(name_1, price, restaurant)];
            case 1:
                food_1 = _b.sent();
                return [4 /*yield*/, food_validation_1.default.createFoodValidation.validate(req.body)];
            case 2:
                error = (_b.sent()).error;
                if (error) {
                    errorMessage = error.details[0].message.replace(/['"]/g, "");
                    response_1.default.FailureResponse(res, 422, { message: errorMessage });
                    return [2 /*return*/];
                }
                response_1.default.SuccessResponse(res, 201, {
                    message: "Order created successfully",
                    data: food_1,
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error("Error creating user:", error_1.message);
                response_1.default.FailureResponse(res, 500, { message: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getRestaurantsByFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foodName, foods, restaurants, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                foodName = req.query.foodName;
                if (!foodName || typeof foodName !== "string") {
                    response_1.default.FailureResponse(res, 400, { message: "Invalid food name provided." });
                    return [2 /*return*/];
                }
                console.log("Searching for food:", foodName);
                return [4 /*yield*/, foodService_1.default.getResByFoodService(foodName)];
            case 1:
                foods = _a.sent();
                if (!foods.length) {
                    response_1.default.FailureResponse(res, 404, { message: "No restaurants found for this food item." });
                }
                restaurants = foods.map(function (food) { return food.restaurant; });
                response_1.default.SuccessResponse(res, 200, { message: "Restaurants retrieved successfully", data: restaurants });
                return [2 /*return*/];
            case 2:
                error_2 = _a.sent();
                console.error("Error fetching restaurants:", error_2.message);
                response_1.default.FailureResponse(res, 500, { message: error_2.message });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllFoods = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, foodService_1.default.getAllFoodsService()];
            case 1:
                foods = _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "Users retrieved successfully", data: foods });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("Error fetching users:", error_3.message);
                response_1.default.FailureResponse(res, 500, { message: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getFoodById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, food_2, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, foodService_1.default.getFoodByIdService(id)];
            case 1:
                food_2 = _a.sent();
                if (!id) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, foodService_1.default.getFoodByIdService(id)];
            case 2:
                _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User retrieved successfully", data: food_2 });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error("Error fetching user:", error_4.message);
                response_1.default.FailureResponse(res, 500, { message: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, price, existingUser, updatedfood, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                price = req.body.price;
                return [4 /*yield*/, foodService_1.default.getFoodByIdService(id)];
            case 1:
                existingUser = _a.sent();
                if (!existingUser) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, foodService_1.default.updateFoodService(id, price)];
            case 2:
                updatedfood = _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User updated successfully", data: updatedfood });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error("Error updating user:", error_5.message);
                response_1.default.FailureResponse(res, 500, { message: error_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, existingUser, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, foodService_1.default.getFoodByIdService(id)];
            case 1:
                existingUser = _a.sent();
                if (!existingUser) {
                    response_1.default.FailureResponse(res, 404, { message: "user not found." });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, foodService_1.default.deleteFoodService(id)];
            case 2:
                _a.sent();
                response_1.default.SuccessResponse(res, 200, { message: "User deleted successfully" });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.error("Error deleting user:", error_6.message);
                response_1.default.FailureResponse(res, 500, { message: error_6.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    createFood: createFood,
    getAllFoods: getAllFoods,
    getFoodById: getFoodById,
    getRestaurantsByFood: getRestaurantsByFood,
    updateFood: updateFood,
    deleteFood: deleteFood
};
