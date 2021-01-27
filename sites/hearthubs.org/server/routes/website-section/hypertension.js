const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../../graphql/fragments/website-section-page');

const index = require('../../templates/website-section/hypertension/index');
const exhibitors = require('../../templates/website-section/hypertension/exhibitors');
const program2020 = require('../../templates/website-section/hypertension/2020-program');
const membership = require('../../templates/website-section/hypertension/membership');

module.exports = (app) => {
  app.get('/:alias(hypertension)', withWebsiteSection({
    template: index,
    queryFragment,
  }));

  app.get('/:alias(hypertension/2020-program)', withWebsiteSection({
    template: program2020,
    queryFragment,
  }));

  app.get('/:alias(hypertension/exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(hypertension/membership)', withWebsiteSection({
    template: membership,
    queryFragment,
  }));
};
