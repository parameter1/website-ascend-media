const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../graphql/fragments/website-section-page');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
