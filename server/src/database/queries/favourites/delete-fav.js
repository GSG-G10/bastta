const connection = require('../../connection');

module.exports = async (productId, userId) => {
  await connection
    .query(`
    DELETE FROM favourite_products 
    WHERE product_id = $1 
    AND user_id = $2
    `, [productId, userId]);

  await connection
    .query(`
    UPDATE products
     SET likes = likes -1
     WHERE id = $1
    `, [productId]);
};
