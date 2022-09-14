require('dotenv').config();

const express = require('express');

const logger = require('morgan');

const session = require('express-session');
const sessionConfig = require('./src/lib/sessionConfig');

const app = express();

app.use(logger('dev'));

app.use(sessionConfig());
app.use(session(sessionConfig));

const checkConnectDb = require('./db/checkDbConnection');

const { DEV_PORT } = process.env;

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
