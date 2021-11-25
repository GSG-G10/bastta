const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
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
  removeUserQuery,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  getAllUsersQuery,
  getDashboardProductsQuery,
};
