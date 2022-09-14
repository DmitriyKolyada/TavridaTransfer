const route = require('express').Router();

const { renderRegistration, signUpUser } = require('../controllers/signUpController');

route
  .get('/', renderRegistration)
  .post('/', signUpUser);

module.exports = route;
