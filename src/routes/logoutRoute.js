const route = require('express').Router();

const { logoutClient } = require('../controllers/logoutController');

route
  .get('/', logoutClient);

module.exports = route;
