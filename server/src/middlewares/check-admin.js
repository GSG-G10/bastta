const { verifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  try {
    const {
      cookies: { admin },
    } = req;

    if (admin) {
      const decoded = verifyToken(admin, process.env.SECRET_KEY);
      if (decoded.role === 'admin') {
        return next();
      }
    } else {
      res.status(401).json({
        message: 'You are not authorized to perform this action.',
      });
    }
  } catch (error) {
    return next(error);
  }
};
