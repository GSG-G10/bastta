const connection = require('../../connection');

module.exports = (userId) => connection.query(
  'DELETE FROM users WHERE id = $1',
  [userId],
);
