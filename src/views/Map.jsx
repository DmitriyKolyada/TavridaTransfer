const React = require('react');

const Layout = require('./Layout');

function YaMap() {
  return (
    <Layout title="Map">
      <div id="map" className="map" />
      {/* <script src="/js/yaMap.js" type="text/javascript" /> */}
    </Layout>
  );
}
module.exports = YaMap;
