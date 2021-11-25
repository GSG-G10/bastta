const connection = require('../../connection');

module.exports = async () => {
  const { rows } = await connection.query('SELECT id,name,email FROM users');
  return rows;
};
