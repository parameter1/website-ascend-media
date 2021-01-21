const startServer = require('@ascend-media/package-shared/start-server');
const document = require('@ascend-media/package-bulletin/components/document');
const components = require('@ascend-media/package-bulletin/components');
const fragments = require('@ascend-media/package-bulletin/fragments');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  document,
  components,
  fragments,
  routes,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
