import Joi from 'joi';

export const eventSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().integer().required(),
  description: Joi.string().required(),
  date: Joi.date().iso().required()
});

export const dateSchema = Joi.object({
  from: Joi.date().iso().required(),
  to: Joi.date().iso().required()
});
