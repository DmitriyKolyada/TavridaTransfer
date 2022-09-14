const React = require('react');
const Layout = require('./Layout');

function Home({ client }) {
  return (
    <Layout client={client}>
      <h2>Home page</h2>
      <h2>Привет, </h2>

    </Layout>
  );
}

module.exports = Home;
