const router = require('express').Router();

const {
  productToFav,
  getOneProduct,
  profileProducts,
  getLandingProducts,
  deleteFav,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/profile/:userId', profileProducts);
router.get('/:productId', getOneProduct);

router.delete('/favorites/:productId', checkSignIn, deleteFav);

module.exports = router;
