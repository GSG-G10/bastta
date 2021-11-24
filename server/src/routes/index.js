const router = require('express').Router();

const {
  userLogout,
  adminLogout,
  clientError,
  serverError,
  productToFav,
} = require('../controllers');

router.get('/logout', userLogout);
router.get('/admin/logout', adminLogout);

router.post('/products/favorites', productToFav);


router.use(clientError);
router.use(serverError);

module.exports = router;
