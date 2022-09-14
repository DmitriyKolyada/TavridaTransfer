require('dotenv').config();

const express = require('express');

const logger = require('morgan');

const app = express();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(logger('dev'));

const checkConnectDb = require('./db/checkDbConnection');

const { DEV_PORT } = process.env;

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
