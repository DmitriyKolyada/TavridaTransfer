const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const renderHome = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Home, { user }, res);
};

module.exports = { renderHome };
