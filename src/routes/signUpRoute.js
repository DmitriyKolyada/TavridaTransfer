const route = require('express').Router();

const { renderRegistration, signUpClient } = require('../controllers/signUpController');

route
  .get('/', renderRegistration)
  .post('/', signUpClient);

module.exports = route;
