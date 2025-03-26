"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var createOrderValidation = joi_1.default.object({
    user: joi_1.default.string().required(),
    foodItems: joi_1.default.array()
        .items(joi_1.default.object({
        food: joi_1.default.string().required(),
        quantity: joi_1.default.number().min(1).required()
    }))
        .required(),
    totalPrice: joi_1.default.number().min(1).required(),
    status: joi_1.default.string().valid("Pending", "Completed", "Cancelled")
});
exports.default = {
    createOrderValidation: createOrderValidation
};
