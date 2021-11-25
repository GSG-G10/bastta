const { profileProductsQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (Number(userId) > 0) {
      const data = await profileProductsQuery(userId);
      const approved = [];
      const pending = [];
      if (data) {
        data.forEach((ele) => {
          if (ele.approved) {
            approved.push(ele);
          } else {
            pending.push(ele);
          }
        });
      }
      return res.json({
        data: {
          approved,
          pending: pending.length,
        },
        message: 'Products import successfully',
      });
    }
    return res
      .status(400)
      .json({ message: 'Bad Request' });
  } catch (err) {
    next(err);
  }
};
