const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('@ascend-media/package-shared/templates/content');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
