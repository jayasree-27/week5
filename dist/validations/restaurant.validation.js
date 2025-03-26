"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var createResValidation = joi_1.default.object({
    name: joi_1.default.string().trim().min(3).max(50).required(),
    location: joi_1.default.string().trim().min(3).max(100).required(),
    rating: joi_1.default.number().min(0).max(5).required()
});
var updateResValidation = joi_1.default.object({
    name: joi_1.default.string().trim().min(3).max(50),
    location: joi_1.default.string().trim().min(3).max(100),
    rating: joi_1.default.number().min(0).max(5)
});
exports.default = {
    createResValidation: createResValidation,
    updateResValidation: updateResValidation
};
