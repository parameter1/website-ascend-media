const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('../../graphql/fragments/website-section-page');

const index = require('../../templates/website-section/qcor/index');
const exhibitors = require('../../templates/website-section/qcor/exhibitors');
const program2020 = require('../../templates/website-section/qcor/2020-program');
const membership = require('../../templates/website-section/qcor/membership');

module.exports = (app) => {
  app.get('/:alias(qcor)', withWebsiteSection({
    template: index,
    queryFragment,
  }));

  app.get('/:alias(qcor/2020-program)', withWebsiteSection({
    template: program2020,
    queryFragment,
  }));

  app.get('/:alias(qcor/exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(qcor/membership)', withWebsiteSection({
    template: membership,
    queryFragment,
  }));
};
