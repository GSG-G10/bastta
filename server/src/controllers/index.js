const {
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  deleteFav,
  productToFav,
  getOneProduct,
  profileProducts,
  publishProduct,
  searchProducts,
  getLandingProducts,
  getDashboardProducts,
  deleteProduct,
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
  deleteUser,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  deleteProduct,
  getOneProduct,
  profileProducts,
  publishProduct,
  searchProducts,
  getLandingProducts,
  getDashboardProducts,
};
