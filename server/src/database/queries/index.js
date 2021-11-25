const {
  newFavorites,
  findProductById,
  deleteProductQuery,
  getDashboardProductsQuery,
} = require('./products');

const {
  getAllUsersQuery,
} = require('./users');

module.exports = {
  newFavorites,
  findProductById,
  getAllUsersQuery,
  deleteProductQuery,
  getDashboardProductsQuery,
};
