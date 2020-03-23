const configureGAM = require('@ascend-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'demo', accountId: '21687441225' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default/lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail1' },

    { name: 'billboard1', templateName: 'BILLBOARD', path: 'default/lb2' },

    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'default/rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'default/rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'default/rail1' },

    { name: 'reskin', path: 'default/reskin' },
  ]);

module.exports = config;
