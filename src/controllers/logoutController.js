const logoutClient = (req, res) => {
  try {
    if (req.session.client) {
      req.session.destroy(() => {
        res.clearCookie('clientCookie');
        res.redirect('/home');
      });
    } else {
      res.redirect('/home');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { logoutClient };
