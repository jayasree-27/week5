import Joi from "joi";

const createUserValidation = Joi.object({
    name: Joi.string()
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
    email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .required()
    .messages({
        "string.email": "Email must be a valid email address.",
        "any.required": "Email is required.",
    }),
    password: Joi.string()
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

export default {
    createUserValidation
}