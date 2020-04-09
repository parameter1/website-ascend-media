const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/content-page');
const companyQueryFragment = require('../../graphql/fragments/company');
const content = require('../templates/content');
const company = require('../templates/content/company');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
