const router = require('express').Router();

const {
  userLogout, userSignup, userLogin, getUserId,
} = require('../controllers');

const { setCookie, checkSignIn } = require('../middlewares');

router.get('/logout', userLogout);
router.post('/signup', userSignup, setCookie);
router.post('/login', userLogin, setCookie);
router.get('/isAuth', checkSignIn, getUserId);

module.exports = router;
