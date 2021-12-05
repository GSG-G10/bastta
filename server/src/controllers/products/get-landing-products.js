const {
  getLandingProducts,
  getProductsBySection,
  getAllProducts,
} = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { section, limit } = req.query;
    let products;
    switch (section) {
      case 'recent':
        products = await getLandingProducts('post_date', Number(limit));
        break;
      case 'favourites':
        products = await getLandingProducts('likes', Number(limit));
        break;
      case undefined:
        products = await getAllProducts();
        break;
      default:
        products = await getProductsBySection(section, 0, Number(limit));
    }

    return res.json({
      message: 'Products Imported Successfuly',
      title: section,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};
