const router = require('express').Router();

const {
  getFavs,
  deleteFav,
  productToFav,
  getPagination,
  getOneProduct,
  profileProducts,
  searchProducts,
  getLandingProducts,
  deleteProduct,
  postProduct,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.post('/', checkSignIn, postProduct);
router.get('/public', getLandingProducts);
router.get('/public/:page/:section', getPagination);
router.get('/search', searchProducts);
router.get('/profile/:userId', profileProducts);

// Favorites
router.get('/favorites', checkSignIn, getFavs);
router.post('/favorites', productToFav);
router.delete('/favorites/:productId', checkSignIn, deleteFav);

//  one product
router.get('/:productId', getOneProduct);
router.delete('/:productId', checkSignIn, deleteProduct);

module.exports = router;
