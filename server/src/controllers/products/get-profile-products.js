const { profileProductsQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const userId = req.params;
    const data = await profileProductsQuery(userId);
  } catch (err) {
    next(err);
  }
};
