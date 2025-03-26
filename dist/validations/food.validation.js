"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var createFoodValidation = joi_1.default.object({
    name: joi_1.default.string().trim().min(3).max(50).required(),
    price: joi_1.default.number().min(0).required(),
    restaurant: joi_1.default.string().hex().length(24).required() // Ensures valid MongoDB ObjectId
});
var updateFoodValidation = joi_1.default.object({
    name: joi_1.default.string().trim().min(3).max(50),
    price: joi_1.default.number().min(0),
    restaurant: joi_1.default.string().hex().length(24)
});
exports.default = {
    createFoodValidation: createFoodValidation,
    updateFoodValidation: updateFoodValidation
};
