const connection = require('../../connection');

module.exports = async (id) => {
  const { rows } = await connection.query(
    `
      SELECT products.*,users.name AS user_name
      FROM products INNER JOIN users
      ON products.user_id = users.id 
      WHERE products.id = $1
      AND products.approved = true
    `,
    [id],
  );
  return rows[0];
};
