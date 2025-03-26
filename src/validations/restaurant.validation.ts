import Joi from "joi";

const createResValidation =Joi.object({
    name:Joi.string().trim().min(3).max(50).required(),
    location:Joi.string().trim().min(3).max(100).required(),
    rating:Joi.number().min(0).max(5).required()
});

const updateResValidation =Joi.object({
    name:Joi.string().trim().min(3).max(50),
    location:Joi.string().trim().min(3).max(100),
    rating:Joi.number().min(0).max(5)
});

export default{
    createResValidation,
    updateResValidation
}

