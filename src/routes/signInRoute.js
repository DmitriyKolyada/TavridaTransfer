const route = require('express').Router();

const { renderLogin, signInClient } = require('../controllers/signInController');

route
  .get('/', renderLogin)
  .post('/', signInClient);

module.exports = route;
