const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home.jsx');

const renderHome = (req, res) => {
  const client = req.session?.client;
  renderTemplate(Home, { client }, res);
};

module.exports = { renderHome };
