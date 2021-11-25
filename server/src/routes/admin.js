const router = require('express').Router();

const {
  getUsers,
  deleteUser,
  adminLogin,
  adminLogout,
  getDashboardProducts,
} = require('../controllers');

const {
  checkAdmin,
} = require('../middlewares');

router.post('/login', adminLogin);
router.get('/logout', adminLogout);
router.get('/users', checkAdmin, getUsers);
router.delete('/users/:userId', checkAdmin, deleteUser);
router.get('/products', checkAdmin, getDashboardProducts);

module.exports = router;
