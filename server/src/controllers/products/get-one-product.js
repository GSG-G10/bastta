const { findProductById } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (Number(productId) > 0) {
      const product = await findProductById(productId);
      if (!product || product.approved === false) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }
      return res.json({
        message: 'Product found',
        data: product,
      });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
