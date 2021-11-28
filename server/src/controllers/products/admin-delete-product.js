const { findProductById, deleteProductQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (productId > 0) {
      const product = await findProductById(productId);

      if (!product) {
        return res.status(400).json({ message: 'Product Not Found' });
      }

      await deleteProductQuery(productId);
      return res.json({ message: 'Product Deleted Successfuly' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (e) {
    return next(e);
  }
};
