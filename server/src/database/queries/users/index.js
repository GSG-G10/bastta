const getAllUsersQuery = require('./get-all-users');
const findUserById = require('./find-user-by-id');
const removeUserQuery = require('./remove-user');
const addNewUser = require('./add-new-user');
const checkAccount = require('./check-account');

module.exports = {
  addNewUser,
  checkAccount,
  findUserById,
  removeUserQuery,
  getAllUsersQuery,
};
