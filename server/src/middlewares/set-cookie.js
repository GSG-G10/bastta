const { signToken } = require('../utils/jwt');

module.exports = async (req, res, next) => {
  try {
    const { SECRET_KEY } = process.env;
    const { userId } = req;

    const token = await signToken({ userId }, SECRET_KEY);

    return res
      .cookie('token', token, { httpOnly: true, secure: true })
      .status(201)
      .json({ message: 'Logged In Successfully' });
  } catch (err) {
    return next(err);
  }
};
