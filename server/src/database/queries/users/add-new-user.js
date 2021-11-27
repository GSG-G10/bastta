const connection = require('../../connection');
const { hashPassword } = require('../../../utils/b-crypt');

module.exports = async ({ name, email, password }) => {
  const hashedPassword = await hashPassword(password);
  const { rows } = await connection
    .query(
      `
      INSERT INTO users (name,email,password)
      VALUES ($1,$2,$3) 
      RETURNING id, name;`,
      [name, email, hashedPassword],
    );

  return rows[0];
};
