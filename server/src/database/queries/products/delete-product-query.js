const connection = require('../../connection');

module.exports = (productId) => connection
  .query(`
    DELETE FROM products
    WHERE id = $1
`, [productId]);
