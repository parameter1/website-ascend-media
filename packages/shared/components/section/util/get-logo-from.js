module.exports = (section, site) => {
  // @todo traverse to root-level sections
  const defaultSrc = site.get('logos.navbar.src');
  const defaultSrcSet = site.getAsArray('logos.navbar.srcset').join(',');

  if (section.logo) {
    const { src } = section.logo;
    const srcSet = `${section.logo.src} 2x`;
    return { src, srcSet };
  }

  return { src: defaultSrc, srcSet: defaultSrcSet };
};
