const {
  userLogin,
  userSignup,
  userLogout,
  adminLogin,
  adminLogout,
} = require('./auth');

const {
  postProduct,
  getOneProduct,
  deleteProduct,
  publishProduct,
  searchProducts,
  profileProducts,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
} = require('./products');

const {
  getFavs,
  deleteFav,
  productToFav,
} = require('./favorites');

const {
  getUsers,
  deleteUser,
} = require('./users');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  getFavs,
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
  publishProduct,
  searchProducts,
  profileProducts,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
};
