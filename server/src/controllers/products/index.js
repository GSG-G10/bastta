const getOneProduct = require('./get-one-product');
const getLandingProducts = require('./get-landing-products');
const productToFav = require('./product-to-fav');
const getDashboardProducts = require('./get-dashboard-products');
const deleteProduct = require('./delete-product');
const deleteFav = require('./delete-favourite');

module.exports = {
  deleteFav,
  productToFav,
  deleteProduct,
  getOneProduct,
  getLandingProducts,
  getDashboardProducts,
};
