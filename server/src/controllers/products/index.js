const deleteFav = require('./delete-favourite');
const productToFav = require('./product-to-fav');
const getOneProduct = require('./get-one-product');
const publishProduct = require('./publish-product');
const searchProducts = require('./search-products');
const getLandingProducts = require('./get-landing-products');
const getDashboardProducts = require('./get-dashboard-products');
const profileProducts = require('./get-profile-products');

module.exports = {
  deleteFav,
  productToFav,
  getOneProduct,
  profileProducts,
  searchProducts,
  publishProduct,
  getLandingProducts,
  getDashboardProducts,
};
