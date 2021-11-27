const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
});
