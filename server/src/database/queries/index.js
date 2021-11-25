const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  publishProductQuery,
  getProductsBySection,
  getDashboardProductsQuery,
} = require('./products');

const {
  findUserById,
  removeUserQuery,
  getAllUsersQuery,
} = require('./users');

module.exports = {
  newFavorites,
  findUserById,
  getAllProducts,
  findProductById,
  removeUserQuery,
  getAllUsersQuery,
  getLandingProducts,
  publishProductQuery,
  getProductsBySection,
  getDashboardProductsQuery,
};
