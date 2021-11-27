const { signToken } = require('../../../utils/jwt');

module.exports = async (req, res, next) => {
  try {
    const { adminPassword, SECRET_KEY } = process.env;
    const { password } = req.body;
    if (!!password && password === adminPassword) {
      const token = await signToken({ role: 'admin' }, SECRET_KEY);
      return res
        .cookie('admin', token, {
          httpOnly: true,
          secure: true,
        })
        .json({ message: 'Admin logged in successfuly' });
    }
    res.status(422).send('Invalid password');
  } catch (err) {
    next(err);
  }
};
