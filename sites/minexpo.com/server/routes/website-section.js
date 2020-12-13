const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@ascend-media/package-common/graphql/fragments/leaders-section');
const directory = require('@ascend-media/package-minexpo/templates/website-section/directory');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

let directoryAliases = [
  'directory/auxiliary-equipment-and-supplies',
  'directory/components-and-replacement-equipment',
  'directory/electrical-equipment-and-supplies',
  'directory/engineering-construction-consulting-and-mining-related-services',
  'directory/material-handling-equipment',
  'directory/mining-equipment',
  'directory/other-related-equipment-products-and-services',
  'directory/power-and-power-transmission-equipment',
  'directory/processingpreparation-equipment',
];

directoryAliases = directoryAliases.map(alias => `${alias}|${alias}/[a-z0-9-/]+`);

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  // map directory allias to use directory templates
  app.get(`/:alias(${directoryAliases.join('|')})`, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
