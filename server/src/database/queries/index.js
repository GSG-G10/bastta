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
  findFavById,
  deleteFav,
} = require('./favourites');

const {
  findUserById,
  removeUserQuery,
  getAllUsersQuery,
} = require('./users');

module.exports = {
  deleteFav,
  newFavorites,
  findFavById,
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
