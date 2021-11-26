const {
  userLogout,
  adminLogout,
} = require('./logout');

const { adminLogin } = require('./login');

const userSignup = require('./signup');

module.exports = {
  adminLogin,
  userSignup,
  userLogout,
  adminLogout,
};
