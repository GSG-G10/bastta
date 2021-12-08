const getOneProduct = require('./get-one-product');
const publishProduct = require('./publish-product');
const searchProducts = require('./search-products');
const getLandingProducts = require('./get-landing-products');
const getDashboardProducts = require('./get-dashboard-products');
const deleteProduct = require('./delete-product');
const profileProducts = require('./get-profile-products');
const postProduct = require('./post-product');
const getPagination = require('./get-pagination');
const adminDeleteProduct = require('./admin-delete-product');
const uploadImages = require('./upload-images');

module.exports = {
  postProduct,
  getPagination,
  deleteProduct,
  getOneProduct,
  profileProducts,
  searchProducts,
  publishProduct,
  adminDeleteProduct,
  getLandingProducts,
  getDashboardProducts,
  uploadImages,
};
