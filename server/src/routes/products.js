const router = require('express').Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const {
  getFavs,
  deleteFav,
  productToFav,
  getPagination,
  getOneProduct,
  profileProducts,
  searchProducts,
  getLandingProducts,
  deleteProduct,
  postProduct,
  uploadImages,
} = require('../controllers');

const { checkSignIn } = require('../middlewares');

router.post('/', checkSignIn, postProduct);
router.post('/upload', checkSignIn, upload.single('image'), (req, res) => {
  const file = req.files;
  console.log(file, 'fdf');
});
router.get('/public', getLandingProducts);
router.get('/public/:page/:section', getPagination);
router.get('/search', searchProducts);
router.get('/profile/:userId', profileProducts);

// Favorites
router.get('/favorites', checkSignIn, getFavs);
router.post('/favorites', checkSignIn, productToFav);
router.delete('/favorites/:productId', checkSignIn, deleteFav);

//  one product
router.get('/:productId', getOneProduct);
router.delete('/:productId', checkSignIn, deleteProduct);

module.exports = router;
