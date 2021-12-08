const moment = require('moment');

const { postProductSchema } = require('../../utils/validation');
const { postProductQuery } = require('../../database/queries');

const uploadFile = require('../../utils/aws');

module.exports = async (req, res, next) => {
  try {
    const { images } = req.body;
    req.body.date = moment().format(); // format the date
    await postProductSchema.validateAsync(req.body); // validation
    /* create an array with the uploaded images */
    const imagesArr = await Promise.all(images.map(async (ele, i) => {
      const img = await uploadFile(`${req.body.name}_${i}`, ele);
      return { [`image_${i + 1}`]: img.Location };
    }));
    req.body.images = JSON.stringify(imagesArr); // stringify images array
    const productPosted = await postProductQuery(req.body); // database query
    return res.status(201).json(productPosted);
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
