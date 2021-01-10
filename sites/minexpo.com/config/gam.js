const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('6407152', { basePath: 'minexpo' });

config
  .setTemplate('leaderboard', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'leaderboard', path: 'lb1' },
    { name: 'rail1', options: { size: [300, 250] }, path: 'rail1' },
    { name: 'rail2', options: { size: [300, 600] }, path: 'rail1' },
  ]);

module.exports = config;
