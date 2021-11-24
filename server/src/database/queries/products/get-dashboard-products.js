const connection = require('../../connection');

module.exports = async (status) => {
  const visibilty = status === 'public' ? 'true' : 'false';
  const { rows } = await connection.query(
    'SELECT * FROM products WHERE approved = $1',
    [visibilty],
  );
  return rows;
};
