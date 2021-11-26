const { searchProductsQuery, getAllProducts } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (q) {
      const products = await searchProductsQuery(q);
      return res.json(products);
    }
    const products = await getAllProducts();
    return res.json(products);
  } catch (err) {
    return next(err);
  }
};
