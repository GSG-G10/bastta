const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  profileProductsQuery,
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
  removeUserQuery,
  findProductById,
  getAllUsersQuery,
  getLandingProducts,
  profileProductsQuery,
  publishProductQuery,
  searchProductsQuery,
  getProductsBySection,
  getDashboardProductsQuery,
};
