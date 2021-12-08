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
  getPagination,
  uploadImages,
} = require('./products');

const {
  getFavs,
  deleteFav,
  productToFav,
} = require('./favorites');

const {
  getUsers,
  getUserId,
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
  getUserId,
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
  getPagination,
  publishProduct,
  searchProducts,
  profileProducts,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
  uploadImages,
};
