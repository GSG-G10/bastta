const router = require('express').Router();

const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const productsRoutes = require('./products');

const { serverError, clientError } = require('../controllers');

router.use('/users', usersRoutes);
router.use('/admin', adminRoutes);
router.use('/products', productsRoutes);

router.use(clientError);
router.use(serverError);

module.exports = router;
