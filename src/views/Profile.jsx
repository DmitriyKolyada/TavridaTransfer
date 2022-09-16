const React = require('react');

const Layout = require('./Layout');

function profile() {
  return (
    <Layout>
      <h1>Личный кабинет</h1>
      <a href="/newTransfer">Заказать трансфер</a>
      {/* <button type="submit">Заказать трансфер</button> */}
      <br />
      <hr />
      <h3>Ранее заказанные трансферы</h3>
    </Layout>
  );
}

module.exports = profile;
