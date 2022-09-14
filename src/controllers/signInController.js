const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const Login = require('../views/SignIn');

const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        req.session.user = user.email;
        req.session.save(() => {
          res.redirect('/home');
        });
      } else {
        res.send('Sorry, your password is wrong');
      }
    } else {
      res.send('User with this name has not been found, you need to register');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { renderLogin, signInUser };
