const getChannel = require('./get-channel');

module.exports = (section, site) => {
  const channel = getChannel(section.hierarchy, site);
  const defaultSrc = site.get('logos.navbar.src');
  const defaultSrcSet = site.getAsArray('logos.navbar.srcset').join(',');

  if (channel && channel.logo) {
    const { src } = channel.logo;
    const srcSet = `${channel.logo.src} 2x`;
    return { src, srcSet };
  }

  return { src: defaultSrc, srcSet: defaultSrcSet };
};
