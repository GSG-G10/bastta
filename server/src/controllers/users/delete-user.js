const { findUserById, removeUserQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (Number(userId) > 0) {
      const user = await findUserById(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      await removeUserQuery(userId);
      return res.json({ message: 'User deleted' });
    }
    return res.status(400).json({
      message: 'Bad Request',
    });
  } catch (error) {
    return next(error);
  }
};
