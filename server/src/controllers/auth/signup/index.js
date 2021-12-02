const { signupValidation } = require('../../../utils/validation');

const { checkAccount, addNewUser } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const user = await checkAccount(req.body.email);
    if (user) {
      return res
        .status(403)
        .json({ error: { message: '1007' } });
    }
    const newUser = await addNewUser(req.body);
    req.userId = newUser.id;

    return next();
  } catch (error) {
    if (error.details) {
      error.status = 400;
    }
    return next(error);
  }
};
