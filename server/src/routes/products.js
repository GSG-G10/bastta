const router = require('express').Router();

const {
  productToFav,
  getOneProduct,
  profileProducts,
  getLandingProducts,
} = require('../controllers');

router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/profile/:userId', profileProducts);
router.get('/:productId', getOneProduct);

module.exports = router;
