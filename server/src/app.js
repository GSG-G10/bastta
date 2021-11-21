require('dotenv').config();

const { join } = require('path');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./routes');

const app = express();

const {
  env: { PORT, NODE_ENV },
} = process;

app.disable('x-powered-by');

app.set('port', PORT || 5000);

app.use(
  [
    compression(),
    cookieParser(),
    express.urlencoded({ extended: false, limit: '5mb' }),
    express.json({ limit: '50mb' }),
  ],
);

app.use('/api/v1/', router);

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
