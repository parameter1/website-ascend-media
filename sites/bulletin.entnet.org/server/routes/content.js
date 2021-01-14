const { withContent } = require('@base-cms/marko-web/middleware');
const companyFragment = require('@ascend-media/package-bulletin/graphql/fragments/company-page');
const queryFragment = require('@ascend-media/package-bulletin/graphql/fragments/content-page');
const company = require('@ascend-media/package-bulletin/templates/content/company');
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
