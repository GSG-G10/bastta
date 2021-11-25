const router = require('express').Router();

const {
  productToFav,
  getOneProduct,
  getLandingProducts,
} = require('../controllers');

router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/:productId', getOneProduct);

module.exports = router;
