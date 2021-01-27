const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../../graphql/fragments/website-section-page');

const index = require('../../templates/website-section/vascular/index');
const exhibitors = require('../../templates/website-section/vascular/exhibitors');
const program2020 = require('../../templates/website-section/vascular/2020-program');
const membership = require('../../templates/website-section/vascular/membership');

module.exports = (app) => {
  app.get('/:alias(vascular)', withWebsiteSection({
    template: index,
    queryFragment,
  }));

  app.get('/:alias(vascular/2020-program)', withWebsiteSection({
    template: program2020,
    queryFragment,
  }));

  app.get('/:alias(vascular/exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(vascular/membership)', withWebsiteSection({
    template: membership,
    queryFragment,
  }));
};
