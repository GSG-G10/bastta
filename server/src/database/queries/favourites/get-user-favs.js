const connection = require('../../connection');

module.exports = async (userId) => {
  const { rows } = await connection
    .query(`
    SELECT products.*, users.name AS user_name
     FROM products INNER JOIN users
     ON products.user_id = users.id
     INNER JOIN favourite_products  
     ON products.id = favourite_products.product_id
     WHERE favourite_products.user_id = $1
     AND products.approved= true
    `, [userId]);

  return rows;
};
