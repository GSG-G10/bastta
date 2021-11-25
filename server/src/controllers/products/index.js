const getOneProduct = require('./get-one-product');
const productToFav = require('./product-to-fav');
const getDashboardProducts = require('./get-dashboard-products');
const deleteFav = require('./delete-favourite');

module.exports = {
  deleteFav,
  productToFav,
  getOneProduct,
  getDashboardProducts,
};
