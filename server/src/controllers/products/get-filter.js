const { filterQuery } = require('../../database/queries');
const { filterSchema } = require('../../utils/validation');

module.exports = async (req, res, next) => {
  try {
    await filterSchema.validateAsync({
      ...req.query, min: Number(req.query.min), max: Number(req.query.max),
    });
    const rows = await filterQuery(req.query);
    res.json({ data: rows });
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    next(err);
  }
};
