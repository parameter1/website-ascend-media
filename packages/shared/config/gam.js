const GAMConfiguration = require('@base-cms/marko-web-gam/config');

module.exports = ({
  accountId = '6407152',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LB', {
      size: [[970, 250], [970, 90], [728, 90], [300, 50]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [300, 50] },
      ],
    })
    .setTemplate('RAIL1', { size: [[300, 250]] });

  return config;
};
