const router = require('express').Router();

const {
  deleteFav,
  productToFav,
  getOneProduct,
  profileProducts,
  searchProducts,
  getLandingProducts,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.get('/search', searchProducts);
router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/profile/:userId', profileProducts);
router.get('/:productId', getOneProduct);

router.delete('/favorites/:productId', checkSignIn, deleteFav);

module.exports = router;
