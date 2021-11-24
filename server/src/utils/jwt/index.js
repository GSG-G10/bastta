const { verify, sign } = require('jsonwebtoken');

const verifyToken = (token, secret) => new Promise((resolve, reject) => {
  verify(token, secret, (err, decode) => {
    if (err) {
      err.status(401);
      reject(err);
    } else resolve(decode);
  });
});

const signToken = (payload, secret) => new Promise((resolve, reject) => {
  sign(payload, secret, (err, token) => {
    if (err) {
      err.status(401);
      reject(err);
    } else resolve(token);
  });
});

module.exports = {
  verifyToken,
  signToken,
};
