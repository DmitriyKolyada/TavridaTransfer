const route = require('express').Router();

const { renderNewTransfer, craeteNewTransfer } = require('../controllers/newTransferController');

route
  .get('/', renderNewTransfer)
  .post('/', craeteNewTransfer);

module.exports = route;
