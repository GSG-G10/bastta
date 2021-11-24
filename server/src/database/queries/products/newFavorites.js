const connection = require('../../connection');

const setFavorite = async (userId, productId) => {
  const inserToFavorite = () => connection.query(
    `
  INSERT INTO favourite_products 
  (user_id, product_id)
  VALUES ($1, $2)`,
    [userId, productId],
  );
  const totalLikes = () => connection.query(
    `
  select
  favourite_products.product_id,
  count(products.likes) as likes
  from favourite_products
  inner join products
  ON
  products.id = favourite_products.product_id
  and
  favourite_products.product_id = $1
  group by favourite_products.product_id
  order by likes desc
  `,
    [productId],
  );
  const updateLikes = (id, likes) => connection.query(
    `
  update products set likes = $2 where  products.id = $1 returning id,likes
  `,
    [id, likes],
  );
  const favoritesProccess = await Promise.all([
    inserToFavorite(),
    totalLikes(),
  ]);
  const insertResult = favoritesProccess[1].rows[0];
  const updateResult = updateLikes(insertResult.product_id, insertResult.likes);
  return (await updateResult).rows[0];
};

module.exports = setFavorite;
