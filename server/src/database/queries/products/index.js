const newFavorites = require('./newFavorites');
const findProductById = require('./find-product-by-id');
const searchProductsQuery = require('./search-products');
const publishProductQuery = require('./publish-product');
const getLandingProducts = require('./get-landing-products');
const getAllProducts = require('./get-all-approved-products');
const getProductsBySection = require('./get-products-by-section');
const getDashboardProductsQuery = require('./get-dashboard-products');

module.exports = {
  newFavorites,
  getAllProducts,
  findProductById,
  getLandingProducts,
  publishProductQuery,
  searchProductsQuery,
  getProductsBySection,
  getDashboardProductsQuery,
};
