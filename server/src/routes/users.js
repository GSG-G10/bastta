const router = require('express').Router();

const { userLogout, userSignup } = require('../controllers');

const { setCookie } = require('../middlewares');

router.get('/logout', userLogout);
router.post('/signup', userSignup, setCookie);

module.exports = router;
