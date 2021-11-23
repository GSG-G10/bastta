const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../connection');

const dbBuilder = () => {
  const filepath = join(__dirname, 'build.sql');
  let sql = readFileSync(filepath).toString();
  sql += readFileSync(join(__dirname, 'fakeData.sql')).toString();
  return connection.query(sql);
};

dbBuilder();

module.exports = dbBuilder;
