const { newFavorites } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    newFavorites(userId, productId);
    return res.json({ message: 'Added successfully' });
  } catch (error) {
    return next(error);
  }
};
