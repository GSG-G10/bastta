const { newFavorites } = require('../../database/queries');

module.exports = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    newFavorites(userId, productId);
    return res.json({ message: 'Added successfully' });
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
