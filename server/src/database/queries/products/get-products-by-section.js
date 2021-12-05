const connection = require('../../connection');

module.exports = async (section, offset, limit) => {
  const { rows } = await connection
    .query(`
     SELECT * ,COUNT(*) OVER()
    FROM products 
    WHERE approved = true AND class ILIKE $1
    OR name ILIKE $1 
    OR type ILIKE $1 
    ORDER BY likes
    DESC
    OFFSET $2 ROWS 
    FETCH NEXT $3 ROWS ONLY;
    `, [`%${section}%`, offset, limit > 0 ? limit : 20]);
  return rows;
};
