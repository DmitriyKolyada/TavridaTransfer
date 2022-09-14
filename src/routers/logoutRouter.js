const route = require('express').Router();

const { logoutUser } = require('../controllers/logoutController');

route
  .get('/', logoutUser);

module.exports = route;
