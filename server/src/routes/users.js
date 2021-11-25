const router = require('express').Router();

const { userLogout } = require('../controllers');

router.get('/logout', userLogout);

module.exports = router;
