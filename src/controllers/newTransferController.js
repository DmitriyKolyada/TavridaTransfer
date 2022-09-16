const renderTemplate = require('../lib/renderTemplate');

const NewTransfer = require('../views/NewTransfer');

const { Order } = require('../../db/models');

const renderNewTransfer = (req, res) => {
  const client = req.session?.client;
  if (req.session.client) {
    renderTemplate(NewTransfer, { client }, res);
  } else {
    res.redirect('/home');
  }
};

const craeteNewTransfer = async (req, res) => {
  if (req.session.client) {
    const {
      transferDate,
      transferTime,
      transferClass,
      commentOnOrder,
      distance,
      travelTime,
      departurePoint,
      arrivalPoint,
      costOfTheTransfer,
    } = req.body;
    await Order.create({
      transferDate,
      transferTime,
      transferClass,
      commentOnOrder,
      distance,
      travelTime,
      departurePoint,
      arrivalPoint,
      costOfTheTransfer,
      clientId: req.session.clientId,
    });
    res.redirect('/profile');
  } else {
    res.redirect('/signIn');
  }
};

module.exports = { renderNewTransfer, craeteNewTransfer };
