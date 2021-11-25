const { productToFav } = require('./products');

const {
  userLogout,
  adminLogout,
} = require('./auth');

const {
  deleteFav,
  getOneProduct,
  getLandingProducts,
  getDashboardProducts,
} = require('./products');

const {
  getUsers,
} = require('./users');

const {
  clientError,
  serverError,
} = require('./errors');

module.exports = {
  getUsers,
  deleteFav,
  userLogout,
  adminLogout,
  clientError,
  serverError,
  productToFav,
  getOneProduct,
  getLandingProducts,
  getDashboardProducts,
};
