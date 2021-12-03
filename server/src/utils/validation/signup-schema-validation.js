const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required().messages({
    'string.empty': '1014',
    'any.required': '1009',
  }),
  email: joi.string().email().required().messages({
    'string.empty': '1006',
    'string.email': '1004',
    'any.required': '1008',
  }),
  password: joi.string().min(8).required().messages({
    'string.empty': '1001',
    'string.min': '1002',
    'any.required': '1003',
  }),
  confirmPassword: joi.ref('password'),
});
