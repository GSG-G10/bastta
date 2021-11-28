const getOneProduct = require('./get-one-product');
const publishProduct = require('./publish-product');
const searchProducts = require('./search-products');
const getLandingProducts = require('./get-landing-products');
const getDashboardProducts = require('./get-dashboard-products');
const deleteProduct = require('./delete-product');
const profileProducts = require('./get-profile-products');
const postProduct = require('./post-product');
const adminDeleteProduct = require('./admin-delete-product');

module.exports = {
  postProduct,
  deleteProduct,
  getOneProduct,
  profileProducts,
  searchProducts,
  publishProduct,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
};
