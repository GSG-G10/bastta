const { verifyToken } = require('../utils/jwt');

module.exports = async (req, res, next) => {
  try {
    const { admin } = req.cookies;
    if (admin) {
      const decoded = await verifyToken(admin, process.env.SECRET_KEY);
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
