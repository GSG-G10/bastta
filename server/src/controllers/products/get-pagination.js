const { getProductsBySection } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { page, section } = req.params;
    if (Number(page) > 0 && section) {
      const products = await getProductsBySection(section, (page - 1) * 10, 10);
      if (products.length) {
        return res.json({
          pageNumber: page,
          count: products[0].count,
          data: products,
          message: 'Products Imported Successfuly',
        });
      }
      return res
        .status(404)
        .json({ message: 'There are no products in this section' });
    }
    return res
      .status(400)
      .json({ message: 'Bad Request' });
  } catch (err) {
    next(err);
  }
};
