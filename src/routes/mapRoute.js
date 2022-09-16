const route = require('express').Router();

const { renderYaMap } = require('../controllers/mapController');

route
  .get('/', renderYaMap);

module.exports = route;
