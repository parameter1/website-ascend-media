const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../graphql/fragments/website-section-page');
const section = require('../templates/website-section');

const vascular = require('../templates/website-section/vascular/index');
const vascularExhibitors = require('../templates/website-section/vascular/exhibitors');

module.exports = (app) => {
  app.get('/:alias(vascular)', withWebsiteSection({
    template: vascular,
    queryFragment,
  }));

  app.get('/:alias(vascular/exhibitors)', withWebsiteSection({
    template: vascularExhibitors,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
