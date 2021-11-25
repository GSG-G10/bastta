const connection = require('../../connection');

module.exports = async (userId) => {
  const { rows } = await connection.query(
    'SELECT id FROM users WHERE id = $1',
    [userId],
  );
  return rows[0];
};
