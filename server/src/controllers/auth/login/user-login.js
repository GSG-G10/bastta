const { checkAccount } = require('../../../database/queries');
const { loginSchema } = require('../../../utils/validation');
const { comparePasswords } = require('../../../utils/b-crypt');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync(req.body);
    const user = await checkAccount(email);
    if (!user) {
      return res.status(401).json({ error: { message: 'invalid email or password' } });
    }
    const compared = await comparePasswords(password, user.password);
    if (!compared) {
      return res.status(401).json({ error: { message: 'invalid email or password' } });
    }
    req.userId = user.id;
    return next();
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
