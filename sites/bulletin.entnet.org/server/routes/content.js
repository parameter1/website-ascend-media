const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/content-page');
const content = require('@ascend-media/package-bulletin/templates/content');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
