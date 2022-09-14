const logoutUser = (req, res) => {
  try {
    if (req.session.user) {
      req.session.destroy(() => {
        res.clearCookie('userCookie');
        res.redirect('/home');
      });
    } else {
      res.redirect('/home');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { logoutUser };
