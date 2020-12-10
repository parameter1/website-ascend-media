const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@ascend-media/package-common/graphql/fragments/leaders-section');
const directory = require('@ascend-media/package-minexpo/templates/website-section/directory');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const leaders = require('../templates/website-section/leaders');
const queryFragment = require('../graphql/fragments/website-section-page');

const directoryAliases = [
  'auxiliary-equipment-and-supplies',
  'components-and-replacement-equipment',
  'electrical-equipment-and-supplies',
  'engineering-construction-consulting-and-mining-related-services',
  'material-handling-equipment',
  'mining-equipment',
  'other-related-equipment-products-and-services',
  'power-and-power-transmission-equipment',
  'processingpreparation-equipment'];

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
  app.get(`/:alias(${directoryAliases.join('/[a-z0-9-/]+|')}|${directoryAliases[(directoryAliases.length - 1)]}/[a-z0-9-/]+)`, withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
