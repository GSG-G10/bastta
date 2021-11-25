const { findProductById } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (Number(productId) > 0) {
      const product = await findProductById(productId);
      if (!product) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }
      if (product.approved === false) {
        return res.json({
          message: 'Product is in the waiting list',
        });
      }
      return res.json({
        message: 'Product found',
        data: product,
      });
    }
    return res.status(400).json({ message: 'Invalid product id' });
  } catch (err) {
    return next(err);
  }
};
