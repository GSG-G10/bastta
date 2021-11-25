const productToFav = require('./product-to-fav');
const getOneProduct = require('./get-one-product');
const publishProduct = require('./publish-product');
const getLandingProducts = require('./get-landing-products');
const getDashboardProducts = require('./get-dashboard-products');
const deleteFav = require('./delete-favourite');

module.exports = {
  deleteFav,
  productToFav,
  getOneProduct,
  publishProduct,
  getLandingProducts,
  getDashboardProducts,
};
