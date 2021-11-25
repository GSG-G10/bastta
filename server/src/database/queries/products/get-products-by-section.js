const connection = require('../../connection');

module.exports = async (section, limit) => {
  const { rows } = await connection
    .query(`
    SELECT * 
    FROM products 
    WHERE approved = true AND class = $1
    ORDER BY likes
    DESC
    limit $2
    `, [section, limit > 0 ? limit : 20]);
  return rows;
};
