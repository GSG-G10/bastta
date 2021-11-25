const {
  userLogout,
  adminLogout,
} = require('./auth');

const {
  getOneProduct,
  getLandingProducts,
} = require('./products');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  userLogout,
  adminLogout,
  clientError,
  serverError,
  getOneProduct,
  getLandingProducts,
};
