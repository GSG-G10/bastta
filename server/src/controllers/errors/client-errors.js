// eslint-disable-next-line no-unused-vars
module.exports = (req, res, next) => {
  res
    .status(404)
    .json({ message: 'Page Not Found!' });
};
