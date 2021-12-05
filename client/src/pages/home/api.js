import axios from 'axios';

const sendRequests = async () => {
  try {
    const products = {};

    const requests = ['recent', 'favourites', 'الإلكترونيات', 'الأثاث', 'المركبات', 'الخدمات']
      .map((request) => axios.get(`/api/v1/products/public?section=${request}&limit=4`));

    await axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          responses.forEach((response) => {
            products[response.data.title] = response.data.data;
          });
        }),
      );
    return products;
  } catch (error) {
    return error;
  }
};
export default sendRequests;
