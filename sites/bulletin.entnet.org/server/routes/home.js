const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-bulletin/graphql/fragments/website-section-page');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
