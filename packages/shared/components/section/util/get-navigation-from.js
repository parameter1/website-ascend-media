module.exports = (section, site) => {
  // console.info('getNavigationFrom', section);
  // @todo traverse to root-level sections
  if (section.alias && site.get(`navigation.${section.alias}`)) {
    return {
      primary: site.getAsArray(`navigation.${section.alias}.primary.items`),
      secondary: site.getAsArray(`navigation.${section.alias}.secondary.items`),
      tertiary: site.getAsArray(`navigation.${section.alias}.tertiary.items`),
      menu: site.getAsArray(`navigation.${section.alias}.menu`),
    };
  }
  return {
    primary: site.getAsArray('navigation.primary.items'),
    secondary: site.getAsArray('navigation.secondary.items'),
    tertiary: site.getAsArray('navigation.tertiary.items'),
    menu: site.getAsArray('navigation.menu'),
  };
};
