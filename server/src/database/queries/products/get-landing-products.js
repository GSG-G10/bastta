const connection = require('../../connection');

module.exports = async (section, limit) => {
  const { rows } = await connection
    .query(`
    SELECT * 
    FROM products 
    WHERE approved = true 
    ORDER BY ${section} 
    DESC
    LIMIT $1;
    `, [limit > 0 ? limit : 20]);
  return rows;
};
