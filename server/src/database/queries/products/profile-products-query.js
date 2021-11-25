const connection = require('../../connection');

module.exports = (userId) => {
  const { rows } = connection
    .query(`
        SELECT * 
        FROM products 
        WHERE user_id = $1 
        AND approved = true
    `, [userId]);
  return rows;
};
