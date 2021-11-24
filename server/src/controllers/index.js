const { productToFav } = require('./products');

const {
  userLogout,
  adminLogout,
} = require('./auth');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  userLogout,
  adminLogout,
  clientError,
  serverError,
  productToFav,
};
