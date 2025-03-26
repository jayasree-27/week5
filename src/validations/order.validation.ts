import Joi from "joi";

const createOrderValidation = Joi.object({
  user: Joi.string().required(),
  foodItems: Joi.array()
    .items(
      Joi.object({
        food: Joi.string().required(),
        quantity: Joi.number().min(1).required()
      })
    )
    .required(),
  totalPrice: Joi.number().min(1).required(),
  status: Joi.string().valid("Pending", "Completed", "Cancelled")
});


export default {
  createOrderValidation
}