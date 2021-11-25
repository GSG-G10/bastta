const newFavorites = require('./newFavorites');
const findProductById = require('./find-product-by-id');
const getDashboardProductsQuery = require('./get-dashboard-products');
const deleteProductQuery = require('./delete-product-query');

module.exports = {
  newFavorites,
  findProductById,
  deleteProductQuery,
  getDashboardProductsQuery,
};
