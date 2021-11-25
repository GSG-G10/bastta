const router = require('express').Router();

const {
  productToFav,
  getOneProduct,
  getLandingProducts,
  deleteFav,
  deleteProduct,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.post('/favorites', productToFav);
router.get('/public', getLandingProducts);
router.get('/:productId', getOneProduct);

router.delete('/favorites/:productId', checkSignIn, deleteFav);
router.delete('/:productId', checkSignIn, deleteProduct);

module.exports = router;
