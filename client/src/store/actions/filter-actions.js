const city = (data) => ({
  type: 'CITY',
  payload: data,
});

const section = (data) => ({
  type: 'SECTION',
  payload: data,
});

const type = (data) => ({
  type: 'TYPE',
  payload: data,
});

const price = (data) => ({
  type: 'PRICE',
  payload: data,
});

const search = (data) => ({
  type: 'SEARCH',
  payload: data,
});

const filteredData = (data) => ({
  type: 'FILTERED_DATA',
  payload: data,
});

const clear = () => ({
  type: 'CLEAR',
});
export {
  city,
  section,
  type,
  price,
  search,
  filteredData,
  clear,
};
