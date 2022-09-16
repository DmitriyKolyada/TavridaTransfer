const route = require('express').Router();

const { renderHome } = require('../controllers/homeController');

route
  .get('/', renderHome);

module.exports = route;




