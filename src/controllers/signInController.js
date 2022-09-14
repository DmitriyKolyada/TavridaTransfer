const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const Login = require('../views/SignIn');

const { Client } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const signInClient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await Client.findOne({ where: { email } });
    if (client) {
      const passwordCheck = await bcrypt.compare(password, client.password);
      if (passwordCheck) {
        req.session.client = client.email;
        req.session.clientId = client.id;
        req.session.clientName = `${client.firstName} ${client.lastName}`;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.send('Sorry, your password is wrong');
      }
    } else {
      res.send('client with this name has not been found, you need to register');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { renderLogin, signInClient };
