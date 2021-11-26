const connection = require('../../connection');

module.exports = async (q) => {
  const { rows } = await connection.query(
    `
    SELECT * FROM products
    WHERE (
    description ILIKE $1
    OR name ILIKE $1 
    OR class ILIKE $1
    )
    AND approved = true
    `,
    [`%${q}%`],
  );
  return rows;
};
