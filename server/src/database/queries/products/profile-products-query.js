const connection = require('../../connection');

module.exports = async (userId) => {
  const { rows } = await connection
    .query(`
        SELECT * 
        FROM products 
        WHERE user_id = $1 
    `, [userId]);
  return rows;
};
