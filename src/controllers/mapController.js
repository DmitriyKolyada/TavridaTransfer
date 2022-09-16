const renderTemplate = require('../lib/renderTemplate');

const YaMap = require('../views/Map');

const renderYaMap = (req, res) => {
  renderTemplate(YaMap, null, res);
};

module.exports = { renderYaMap };
