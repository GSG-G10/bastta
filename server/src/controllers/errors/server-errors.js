// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      error: {
        status: err.status || 500,
        message: err.status ? err.message : 'Internal Server Error',
      },
    });
};
