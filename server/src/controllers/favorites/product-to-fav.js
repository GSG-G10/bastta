const { newFavorites } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;

    const { id, likes } = await newFavorites(userId, productId);

    return res.json({ message: 'Added to favorites successfully', id, likes });
  } catch (error) {
    return next(error);
  }
};
