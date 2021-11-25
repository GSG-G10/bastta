const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  profileProductsQuery,
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
  removeUserQuery,
  findProductById,
  getAllUsersQuery,
  getLandingProducts,
  profileProductsQuery,
  getProductsBySection,
  getDashboardProductsQuery,
};
