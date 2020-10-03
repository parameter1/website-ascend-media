const { getAsArray } = require('@base-cms/object-path');

module.exports = (hierarchy, site) => getAsArray({ hierarchy }, 'hierarchy')
  .reverse()
  .reduce((obj, section) => {
    if (obj) return obj;
    if (section.alias && site.get(`navigation.${section.alias}`)) return section;
    return null;
  }, null);
