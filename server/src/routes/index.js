const router = require('express').Router();

const {
  userLogout,
  adminLogout,
  clientError,
  serverError,
} = require('../controllers');

router.get('/logout', userLogout);
router.get('/admin/logout', adminLogout);

router.use(clientError);
router.use(serverError);

module.exports = router;
