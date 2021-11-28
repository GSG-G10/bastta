const connection = require('../../connection');

module.exports = async ({
  userId,
  name: productName,
  class: productClass,
  type, date, city, phone,
  description, price, currency, images,
}) => {
  const { rows } = await connection
    .query(`
    INSERT INTO products (
        user_id, name,
        class, type, post_date,
        city, phone,
        description, price,
        currency, images
    )
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *;
    `, [
      userId,
      productName,
      productClass,
      type, date, city, phone,
      description, price, currency, images]);
  return rows[0];
};
