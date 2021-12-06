const joi = require('joi');

module.exports = joi.object({
  city: joi.any().required(),
  section: joi.any().required(),
  type: joi.any().required(),
  min: joi.number().min(0).required(),
  max: joi.number().required(),
});
