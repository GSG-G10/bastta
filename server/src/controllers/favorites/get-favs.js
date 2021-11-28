const { getUserFavs } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const data = await getUserFavs(userId);
    res.json({ data, message: 'Products Imported Successfuly' });
  } catch (err) {
    next(err);
  }
};
