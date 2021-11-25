const {
  userLogout,
  adminLogout,
} = require('./logout');

const { adminLogin } = require('./login');

module.exports = {
  adminLogin,
  userLogout,
  adminLogout,
};
