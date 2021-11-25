const findProductById = require('./find-product-by-id');
const getLandingProducts = require('./get-landing-products');
const getProductsBySection = require('./get-products-by-section');
const getAllProducts = require('./get-all-approved-products');
const newFavorites = require('./newFavorites');
const getDashboardProductsQuery = require('./get-dashboard-products');
const deleteProductQuery = require('./delete-product-query');

module.exports = {
  findProductById,
  deleteProductQuery,
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
  newFavorites,
  getDashboardProductsQuery,
};
