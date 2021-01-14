const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-bulletin/graphql/fragments/dynamic-page');
const page = require('@ascend-media/package-bulletin/templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
