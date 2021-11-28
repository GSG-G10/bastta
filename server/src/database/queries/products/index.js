const newFavorites = require('./newFavorites');
const findProductById = require('./find-product-by-id');
const searchProductsQuery = require('./search-products');
const publishProductQuery = require('./publish-product');
const getLandingProducts = require('./get-landing-products');
const getAllProducts = require('./get-all-approved-products');
const getProductsBySection = require('./get-products-by-section');
const getDashboardProductsQuery = require('./get-dashboard-products');
const deleteProductQuery = require('./delete-product-query');
const profileProductsQuery = require('./profile-products-query');
const postProductQuery = require('./post-product-query');

module.exports = {
  newFavorites,
  getAllProducts,
  findProductById,
  postProductQuery,
  deleteProductQuery,
  getLandingProducts,
  publishProductQuery,
  searchProductsQuery,
  getProductsBySection,
  profileProductsQuery,
  getDashboardProductsQuery,
};
