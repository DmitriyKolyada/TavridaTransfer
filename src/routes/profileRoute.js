const route = require('express').Router();

const { renderProfile } = require('../controllers/profileController');

route
  .get('/', renderProfile);

module.exports = route;
