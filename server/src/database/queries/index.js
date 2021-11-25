const {
  newFavorites,
  findProductById,
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
  getAllUsersQuery,
  getDashboardProductsQuery,
};
