const { findProductById, deleteProductQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { userId } = req.body;
    if (productId > 0) {
      const product = await findProductById(productId);
      if (!product) {
        return res.status(400).json({ message: 'Product Not Found' });
      }
      if (product.user_id !== Number(userId)) {
        return res.status(403).json({
          message: 'You don\'t have permission to delete this product',
        });
      }
      await deleteProductQuery(productId);
      return res.json({ message: 'Product Deleted Successfuly' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    next(err);
  }
};
