const connection = require('../../connection');

module.exports = async (productId, userId) => {
  const { rows } = await connection
    .query(`
    SELECT favourite_products.*, products.id
    FROM favourite_products INNER JOIN products 
    ON favourite_products.product_id = products.id
    WHERE favourite_products.product_id = $1
    AND favourite_products.user_id = $2;
    `, [productId, userId]);
  return rows[0];
};
