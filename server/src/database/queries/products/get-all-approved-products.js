const connection = require('../../connection');

module.exports = async () => {
  const { rows } = await connection
    .query(`
    SELECT *
    FROM products
    WHERE approved = true
    ORDER BY likes
    DESC
    `);
  return rows;
};
