const { compare, hash } = require('bcryptjs');

const hashPassword = (password) => hash(password, 8);
const comparePasswords = (password, hashedPassword) => compare(password, hashedPassword);

module.exports = {
  hashPassword,
  comparePasswords,
};
