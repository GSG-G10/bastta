const {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getDashboardProductsQuery,
} = require('./products');

const {
  findFavById,
  deleteFav,
} = require('./favourites');

const {
  getAllUsersQuery,
} = require('./users');

module.exports = {
  deleteFav,
  newFavorites,
  findFavById,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  getAllUsersQuery,
  getDashboardProductsQuery,
};
