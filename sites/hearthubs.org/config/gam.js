const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('6407152', { basePath: 'hearthubs' });

config
  .setTemplate('LB', {
    size: [[970, 90], [728, 90], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [300, 50] },
    ],
  })
  .setTemplate('RAIL1', { size: [[300, 250]] })
  .setTemplate('FLUID', { size: ['fluid'] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'rail2' },
    { name: 'fluid1', templateName: 'FLUID', path: 'fluid1' },
    { name: 'fluid2', templateName: 'FLUID', path: 'fluid2' },
    { name: 'fluid3', templateName: 'FLUID', path: 'fluid3' },
  ])
  .setAliasAdUnits('vascular', [
    { name: 'lb1', templateName: 'LB', path: 'vascular-lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vascular-rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'vascular-rail2' },
    { name: 'fluid1', templateName: 'FLUID', path: 'vascular-fluid1' },
    { name: 'fluid2', templateName: 'FLUID', path: 'vascular-fluid2' },
    { name: 'fluid3', templateName: 'FLUID', path: 'vascular-fluid3' },
  ]);

module.exports = config;
