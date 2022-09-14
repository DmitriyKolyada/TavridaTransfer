require('dotenv').config();

const express = require('express');

const logger = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');

const checkConnectDb = require('./db/checkDbConnection');

const indexRoute = require('./src/routes/indexRoute');
const homeRoute = require('./src/routes/homeRoute');
const signUpRoute = require('./src/routes/signUpRoute');
const signInRoute = require('./src/routes/signInRoute');
const logoutRoute = require('./src/routes/logoutRoute');

const app = express();

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

const { DEV_PORT, SESSION_SECRET } = process.env;

app.use(session({
  name: 'clientCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'secretpass',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000,
    httpOnly: true,
  },
}));

app.use('/', indexRoute);
app.use('/home', homeRoute);
app.use('/signUp', signUpRoute);
app.use('/signIn', signInRoute);
app.use('/logout', logoutRoute);

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
