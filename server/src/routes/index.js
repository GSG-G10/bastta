const router = require('express').Router();

const { productToFav } = require('../controllers');

router.post('/products/favorites', productToFav);

module.exports = router;
