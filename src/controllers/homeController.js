const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const renderHome = (req, res) => {
  const clientName = req.session?.clientName;
  const client = req.session?.client;
  renderTemplate(Home, { clientName, client }, res);
};

module.exports = { renderHome };
