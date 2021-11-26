const connection = require('../../connection');

module.exports = (productId) => connection.query(
  `
        UPDATE products
        SET approved = true
        WHERE id = $1
    `,
  [productId],
);
