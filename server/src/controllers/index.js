const {
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  productToFav,
  getOneProduct,
  publishProduct,
  getLandingProducts,
  getDashboardProducts,
} = require('./products');

const {
  getUsers,
  deleteUser,
} = require('./users');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  getUsers,
  adminLogin,
  userLogout,
  deleteUser,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  getOneProduct,
  publishProduct,
  getLandingProducts,
  getDashboardProducts,
};
