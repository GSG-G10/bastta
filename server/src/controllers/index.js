const {
  userLogin,
  userSignup,
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  deleteFav,
  postProduct,
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
  userLogin,
  deleteFav,
  adminLogin,
  userLogout,
  userSignup,
  deleteUser,
  postProduct,
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
