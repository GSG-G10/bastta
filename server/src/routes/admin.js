const router = require('express').Router();

const {
  getUsers,
  deleteUser, adminLogin, adminDeleteProduct,
  adminLogout, publishProduct, getDashboardProducts,
} = require('../controllers');

const { checkAdmin } = require('../middlewares');

router.post('/login', adminLogin);
router.get('/logout', adminLogout);
router.get('/users', checkAdmin, getUsers);
router.delete('/users/:userId', checkAdmin, deleteUser);
router.delete('/products/:productId', checkAdmin, adminDeleteProduct);
router.get('/products', checkAdmin, getDashboardProducts);
router.put('/products/:productId', checkAdmin, publishProduct);

module.exports = router;
