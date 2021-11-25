const getOneProduct = require('./get-one-product');
const productToFav = require('./product-to-fav');
const getDashboardProducts = require('./get-dashboard-products');
const deleteProduct = require('./delete-product');

module.exports = {
  productToFav,
  deleteProduct,
  getOneProduct,
  getDashboardProducts,
};
