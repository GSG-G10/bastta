const router = require('express').Router();

const {
  getUsers,
  deleteUser,
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
  checkAdmin,
} = require('../middlewares');

router.get('/products/public', getLandingProducts);
router.get('/products/:productId', getOneProduct);
router.post('/products/favorites', productToFav);

router.post('/admin/login', adminLogin);
router.get('/admin/logout', adminLogout);
router.get('/admin/users', checkAdmin, getUsers);
router.delete('/admin/users/:userId', checkAdmin, deleteUser);
router.get('/admin/products', checkAdmin, getDashboardProducts);

router.get('/user/logout', userLogout);

router.use(clientError);
router.use(serverError);

module.exports = router;
