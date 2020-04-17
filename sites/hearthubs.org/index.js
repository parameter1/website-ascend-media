const newrelic = require('newrelic');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');
const { startServer } = require('@base-cms/marko-web');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const document = require('./server/components/document');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  document,
  onStart: async (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');
    app.use(cleanResponse());
  },
  onAsyncBlockError: newrelic.noticeError.bind(newrelic),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
