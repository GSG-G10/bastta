const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  searchProductsQuery,
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
  searchProductsQuery,
  getProductsBySection,
  getDashboardProductsQuery,
};
