const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');

const { Client } = require('../../db/models');

const renderRegistration = (req, res) => {
  renderTemplate(SignUp, null, res);
};

const signUpClient = async (req, res) => {
  const {
    firstNameClient, lastNameClient, email, password,
  } = req.body;
  try {
    if (firstNameClient && lastNameClient && email && password) {
      const hashPassword = await bcrypt.hash(password, 10);
      const client = await Client.create({
        firstName: firstNameClient, lastName: lastNameClient, email, password: hashPassword,
      });
      req.session.client = client.email;
      req.session.clientId = client.id;
      req.session.clientName = `${client.firstName} ${client.lastName}`;
      req.session.save(() => {
        res.redirect('/');
      });
    } else if (!firstNameClient) {
      res.send('Введите Ваше имя');
      res.status(400);
    } else if (!lastNameClient) {
      res.send('Введите Вашу фамилию');
      res.status(400);
    } else if (!password) {
      res.send('Придумайте пароль');
      res.status(400);
    } else if (!email) {
      res.send('Введите Ваш email');
      res.status(400);
    }
  } catch (error) {
    const clientRegisteredEarlier = await Client.findOne({ where: { firstNameClient, lastNameClient, email } });
    const emailAlreadyInUse = await Client.findOne({ where: { email } });

    if (clientRegisteredEarlier) {
      res.send('Пользователь уже зарегистрирован ранее, перейдитe на авторизацию');
      res.status(401);
    } else if (emailAlreadyInUse) {
      res.send('Данный Email уже используется');
      res.status(401);
    }
  }
};

module.exports = { renderRegistration, signUpClient };
