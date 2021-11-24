const { getDashboardProductsQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { status } = req.query;
    if (status) {
      if (status.toLowerCase() === 'public' || status.toLowerCase() === 'pending') {
        const products = await getDashboardProductsQuery(status);
        return products.length > 0
          ? res.json(products)
          : res.json({ message: 'No products' });
      }
      return res
        .status(400)
        .json({ message: 'Invalid status' });
    }
    res.status(400).json({ message: 'Bad Request' });
  } catch (error) {
    return next(error);
  }
};
