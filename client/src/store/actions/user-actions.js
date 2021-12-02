const createAuth = (id) => ({
  type: 'CREATE_AUTH',
  payload: id,
});
export default createAuth;
