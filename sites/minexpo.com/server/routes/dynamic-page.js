const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const page = require('@ascend-media/package-minexpo/templates/dynamic-page');
const queryFragment = require('@ascend-media/package-minexpo/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
