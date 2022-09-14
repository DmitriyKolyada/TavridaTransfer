const route = require('express').Router();

const { renderLogin, signInUser } = require('../controllers/signInController');

route
  .get('/', renderLogin)
  .post('/', signInUser);

module.exports = route;
