module.exports = (req, res, next) => {
  try {
    res.clearCookie('token').json({ message: '1013' });
  } catch (err) {
    next(err);
  }
};
