const {
  userLogout,
  adminLogout,
} = require('./logout');

const { adminLogin, userLogin } = require('./login');

const userSignup = require('./signup');

module.exports = {
  userLogin,
  adminLogin,
  userSignup,
  userLogout,
  adminLogout,
};
