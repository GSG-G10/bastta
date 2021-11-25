const router = require('express').Router();

const {
  productToFav,
  getOneProduct,
  getLandingProducts,
  deleteFav,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/:productId', getOneProduct);

router.delete('/favorites/:productId', checkSignIn, deleteFav);

module.exports = router;
