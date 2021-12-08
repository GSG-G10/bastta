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
  getFilteredData,
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
  getFilteredData,
  searchProducts,
  profileProducts,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
  uploadImages,
};
