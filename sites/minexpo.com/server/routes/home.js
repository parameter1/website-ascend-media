const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
// const home = require('../templates/index');
// const home = require('../templates/index');
const directory = require('@ascend-media/package-minexpo/templates/website-section/directory');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: directory,
    queryFragment,
  }));
};
