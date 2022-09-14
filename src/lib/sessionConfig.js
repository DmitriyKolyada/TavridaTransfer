const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'testCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'secretpass',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000,
    httpOnly: true,
  },
};

module.exports = { sessionConfig };
