const {
  newFavorites,
  getAllProducts,
  findProductById,
  deleteProductQuery,
  getLandingProducts,
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
  removeUserQuery,
  findProductById,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  getAllUsersQuery,
  deleteProductQuery,
  getDashboardProductsQuery,
};
