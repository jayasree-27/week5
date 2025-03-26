"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var createUserValidation = joi_1.default.object({
    name: joi_1.default.string()
        .min(3)
        .max(50)
        .trim()
        .regex(/^[A-Za-z\s]+$/)
        .required()
        .messages({
        "string.base": "Name must be string.",
        "string.min": "Name must be at least 3 characters long.",
        "string.max": "Name must not exceed 50 characters.",
        "string.pattern.base": "Name must contain only alphabets and spaces.",
        "any.required": "Name is required.",
    }),
    email: joi_1.default.string()
        .email()
        .trim()
        .lowercase()
        .required()
        .messages({
        "string.email": "Email must be a valid email address.",
        "any.required": "Email is required.",
    }),
    password: joi_1.default.string()
        .min(8)
        .max(20)
        .trim()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
        .required()
        .messages({
        "string.min": "Password must be at least 8 characters long.",
        "string.max": "Password must not exceed 20 characters.",
        "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        "any.required": "Password is required.",
    }),
});
exports.default = {
    createUserValidation: createUserValidation
};
