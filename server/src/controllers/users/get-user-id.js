module.exports = async (req, res, next) => {
  try {
    const { userId } = req.body;
    res.json({ userId });
  } catch (err) {
    return next(err);
  }
};
