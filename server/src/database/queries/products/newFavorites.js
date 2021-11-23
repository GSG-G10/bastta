const connection = require('../../connection');

module.exports = (userId, productId) => connection.query(
  `
  INSERT INTO favourite_products (user_id, product_id)
  VALUES ($1, $2)
`,
  [userId, productId],
);
