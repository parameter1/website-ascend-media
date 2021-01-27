const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../../graphql/fragments/website-section-page');

const index = require('../../templates/website-section/bcvs/index');
const exhibitors = require('../../templates/website-section/bcvs/exhibitors');
const program2020 = require('../../templates/website-section/bcvs/2020-program');
const membership = require('../../templates/website-section/bcvs/membership');

module.exports = (app) => {
  app.get('/:alias(bcvs)', withWebsiteSection({
    template: index,
    queryFragment,
  }));

  app.get('/:alias(bcvs/2020-program)', withWebsiteSection({
    template: program2020,
    queryFragment,
  }));

  app.get('/:alias(bcvs/exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(bcvs/membership)', withWebsiteSection({
    template: membership,
    queryFragment,
  }));
};
