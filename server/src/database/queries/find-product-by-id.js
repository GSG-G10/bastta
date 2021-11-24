const connection = require('../connection');

module.exports = async (id) => {
  const { rows } = await connection.query(
    'SELECT * FROM products WHERE id = $1',
    [id],
  );
  return rows[0];
};
