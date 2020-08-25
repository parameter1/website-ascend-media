const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
// const home = require('../templates/index');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: leaders,
    queryFragment,
  }));
};
