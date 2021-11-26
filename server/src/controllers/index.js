const {
  userSignup,
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  deleteFav,
  productToFav,
  getOneProduct,
  publishProduct,
  searchProducts,
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
  deleteFav,
  adminLogin,
  userLogout,
  userSignup,
  deleteUser,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  getOneProduct,
  publishProduct,
  searchProducts,
  getLandingProducts,
  getDashboardProducts,
};
