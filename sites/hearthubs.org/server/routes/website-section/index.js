const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../../graphql/fragments/website-section-page');
const section = require('../../templates/website-section');
const vascular = require('./vascular');
const qcor = require('./qcor');
const bcvs = require('./bcvs');
const hypertension = require('./hypertension');

module.exports = (app) => {
  vascular(app);

  qcor(app);

  bcvs(app);

  hypertension(app);

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
