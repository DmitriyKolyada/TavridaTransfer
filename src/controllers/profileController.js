const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');

const renderProfile = (req, res) => {
  const clientName = req.session?.clientName;
  const client = req.session?.client;
  if (req.session.client) {
    renderTemplate(Profile, { clientName, client }, res);
  } else {
    res.redirect('/home');
  }
};

module.exports = { renderProfile };
