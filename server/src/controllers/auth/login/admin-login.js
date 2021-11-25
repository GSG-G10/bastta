const { signToken } = require('../../../utils/jwt');

module.exports = async (req, res, next) => {
  try {
    const { SECRET_KEY } = process.env;
    const token = await signToken({ role: 'admin' }, SECRET_KEY);
    return res.cookie(
      'admin',
      token,
      {
        httpOnly: true,
        secure: true,
      },
    )
      .json({ message: 'Admin logged in successfuly' });
  } catch (err) {
    next(err);
  }
};
