const router = require('express').Router();

const {
  getUsers,
  userLogout,
  serverError,
  adminLogout,
  clientError,
  productToFav,
  getOneProduct,
  getDashboardProducts,
} = require('../controllers');

const {
  checkAdmin,
} = require('../middlewares');

router.get('/products/:productId', getOneProduct);

router.get('/admin/products', checkAdmin, getDashboardProducts);
router.get('/admin/users', checkAdmin, getUsers);

router.get('/logout', userLogout);
router.get('/admin/logout', adminLogout);

router.post('/products/favorites', productToFav);

router.use(clientError);
router.use(serverError);

module.exports = router;
