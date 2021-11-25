const { findFavById, deleteFav } = require('../../database/queries');

module.exports = (req, res, next) => {
  res.json({ message: 'delete' });
  // try {
  //   const { productId } = req.params;
  //   const { userId } = req.body;
  //   if (Number(productId) > 0) {
  //     const favourite = await findFavById(productId, userId);
  //     if (!favourite) {
  //       return res.status(400).json({
  //         status: 400,
  //         message: 'Product Doesn\'t Exist in Favorites',
  //       });
  //     }
  //     await deleteFav(productId, userId);
  //     return res.json({ message: 'Product Deleted From Favorites Successfuly' });
  //   }
  //   return res.status(400).json({ message: 'Bad Request' });
  // } catch (err) {
  //   next(err);
  // }
};
