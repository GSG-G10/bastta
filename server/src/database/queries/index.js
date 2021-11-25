const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getDashboardProductsQuery,
} = require('./products');

const {
  getAllUsersQuery,
} = require('./users');

module.exports = {
  newFavorites,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  getAllUsersQuery,
  getDashboardProductsQuery,
};
