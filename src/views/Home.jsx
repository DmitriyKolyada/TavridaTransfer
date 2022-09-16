const React = require('react');
const Layout = require('./Layout');

function Home({ clientName , client }) {
  console.log('~ client', clientName);

  return (
    <Layout client={client}>
      <h2>Home page</h2>

    </Layout>
  );
}

module.exports = Home;
