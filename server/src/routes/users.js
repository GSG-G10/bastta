const router = require('express').Router();

const { userLogout, userSignup, userLogin } = require('../controllers');

const { setCookie } = require('../middlewares');

router.get('/logout', userLogout);
router.post('/signup', userSignup, setCookie);
router.post('/login', userLogin, setCookie);

module.exports = router;
