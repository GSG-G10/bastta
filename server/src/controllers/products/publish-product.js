const { findProductById, publishProductQuery } = require('../../database/queries');

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
      if (product.approved === true) {
        return res.status(409).json({
          message: 'Product already published',
        });
      }
      await publishProductQuery(productId);
      return res.status(200).json({ message: 'Product published successfuly' });
    }
    res.status(400).json({ message: 'Invalid product id' });
  } catch (error) {
    return next(error);
  }
};
