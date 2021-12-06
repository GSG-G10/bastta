const connection = require('../../connection');

module.exports = async ({
  city, section, type, min, max,
}) => {
  const { rows } = await connection
    .query(`
      SELECT *, COUNT(*) OVER() FROM products
      WHERE approved = true 
      AND city ILIKE $1
      AND class ILIKE $2
      AND type ILIKE $3
      AND price >= $4
      AND price <= $5
    `, [`%${city}%`, `%${section}%`, `%${type}%`, min, max]);

  return rows;
};
