const getOneProduct = require('./get-one-product');
const getLandingProducts = require('./get-landing-products');
const productToFav = require('./product-to-fav');
const getDashboardProducts = require('./get-dashboard-products');
const profileProducts = require('./get-profile-products');

module.exports = {
  productToFav,
  getOneProduct,
  profileProducts,
  getLandingProducts,
  getDashboardProducts,
};
