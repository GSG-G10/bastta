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
  addNewUser,
  checkAccount,
  findUserById,
  removeUserQuery,
  getAllUsersQuery,
} = require('./users');

module.exports = {
  deleteFav,
  addNewUser,
  findFavById,
  checkAccount,
  newFavorites,
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
