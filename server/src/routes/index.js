const router = require('express').Router();

const {
  getUsers,
  deleteFav,
  adminLogin,
  userLogout,
  serverError,
  adminLogout,
  clientError,
  productToFav,
  getOneProduct,
  getLandingProducts,
  getDashboardProducts,
} = require('../controllers');

const {
  checkAdmin, checkSignIn,
} = require('../middlewares');

router.delete('/products/favorites/:productId', checkSignIn, deleteFav);
router.get('/products/public', getLandingProducts);
router.get('/products/:productId', getOneProduct);

router.get('/admin/products', checkAdmin, getDashboardProducts);
router.get('/admin/users', checkAdmin, getUsers);

router.get('/logout', userLogout);
router.get('/admin/logout', adminLogout);
router.post('/admin/login', adminLogin);

router.post('/products/favorites', productToFav);

router.use(clientError);
router.use(serverError);

module.exports = router;
