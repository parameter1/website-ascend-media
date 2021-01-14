const getChannel = require('./get-channel');

module.exports = (section, site) => {
  const channel = getChannel(section.hierarchy, site);
  if (channel && channel.alias) {
    return {
      primary: site.getAsArray(`navigation.${channel.alias}.primary.items`),
      secondary: site.getAsArray(`navigation.${channel.alias}.secondary.items`),
      tertiary: site.getAsArray(`navigation.${channel.alias}.tertiary.items`),
      menu: site.getAsArray(`navigation.${channel.alias}.menu`),
    };
  }
  return {
    primary: site.getAsArray('navigation.primary.items'),
    secondary: site.getAsArray('navigation.secondary.items'),
    tertiary: site.getAsArray('navigation.tertiary.items'),
    menu: site.getAsArray('navigation.menu'),
  };
};
