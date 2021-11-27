const connection = require('../../connection');

module.exports = async (email) => {
  const { rows } = await connection
    .query(
      'SELECT id FROM users WHERE email= $1 ;',
      [email],
    );

  return rows[0];
};
