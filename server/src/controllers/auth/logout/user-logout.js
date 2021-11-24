module.exports = (req, res, next) => {
  try {
    res.clearCookie('token').json({ message: 'Signed out succefully' });
  } catch (err) {
    next(err);
  }
};
