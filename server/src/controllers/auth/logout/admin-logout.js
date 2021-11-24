module.exports = (req, res, next) => {
  try {
    res.clearCookie('admin').json({ message: 'Signed out succefully' });
  } catch (err) {
    next(err);
  }
};
