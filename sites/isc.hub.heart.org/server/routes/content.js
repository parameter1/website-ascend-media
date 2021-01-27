const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const companyFragment = require('@ascend-media/package-shared/graphql/fragments/company-page');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/content-page');
const company = require('@ascend-media/package-shared/templates/content/company');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
