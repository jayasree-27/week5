import Joi from "joi";

const createFoodValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50).required(),
  price: Joi.number().min(0).required(),
  restaurant: Joi.string().hex().length(24).required() // Ensures valid MongoDB ObjectId
});

const updateFoodValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50),
  price: Joi.number().min(0),
  restaurant: Joi.string().hex().length(24)
});


export default{
    createFoodValidation,
    updateFoodValidation
}