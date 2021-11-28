const joi = require('joi');

module.exports = joi.object({
  userId: joi.number().required(),
  name: joi.string().required(),
  class: joi.string().required(),
  type: joi.string().required(),
  date: joi.date().required(),
  city: joi.string().required(),
  phone: joi.string().max(20).pattern(/^[0-9]+$/).required(),
  description: joi.string().required(),
  price: joi.number().required(),
  currency: joi.string().required(),
  images: joi.array().required(),
});
