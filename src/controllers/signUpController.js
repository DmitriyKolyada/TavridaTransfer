const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');

const { User } = require('../../db/models');

const renderRegistration = (req, res) => {
  renderTemplate(SignUp, null, res);
};

const signUpUser = async (req, res) => {
  const {
    userName, email, password, role,
  } = req.body;
  try {
    if (userName && email && password) {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        userName, email, password: hashPassword, role,
      });
      req.session.user = user.email;
      req.session.save(() => {
        res.redirect('/home');
      });
    } else if (!userName) {
      res.send('Enter your name');
      res.status(400);
    } else if (!email) {
      res.send('Enter your email');
      res.status(400);
    } else if (!password) {
      res.send('Enter your password');
      res.status(400);
    }
  } catch (error) {
    const userRegisteredEarlier = await User.findOne({ where: { userName, email } });
    const emailAlreadyInUse = await User.findOne({ where: { email } });

    if (userRegisteredEarlier) {
      res.send('User is registered earlier, go to login');
      res.status(401);
    } else if (emailAlreadyInUse) {
      res.send('This email is already in use');
      res.status(401);
    }
  }
};

module.exports = { renderRegistration, signUpUser };
