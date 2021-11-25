const getOneProduct = require('./get-one-product');
const getLandingProducts = require('./get-landing-products');
const productToFav = require('./product-to-fav');
const getDashboardProducts = require('./get-dashboard-products');
const profileProducts = require('./get-profile-products');
const deleteFav = require('./delete-favourite');

module.exports = {
  deleteFav,
  productToFav,
  getOneProduct,
  profileProducts,
  getLandingProducts,
  getDashboardProducts,
};
