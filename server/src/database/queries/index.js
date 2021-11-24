const { newFavorites } = require('./products');

const findProductById = require('./find-product-by-id');
const getDashboardProductsQuery = require('./get-dashboard-products');

module.exports = {
  findProductById,
  newFavorites,
  getDashboardProductsQuery,
};
