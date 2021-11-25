const {
  newFavorites,
  findProductById,
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
  getAllUsersQuery,
  getDashboardProductsQuery,
};
