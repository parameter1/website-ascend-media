const configureGAM = require('@ascend-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'demo', accountId: '21687441225' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rail1' },

    { name: 'billboard1', templateName: 'BILLBOARD', path: 'lb2' },

    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'rail1' },

    { name: 'reskin', path: 'reskin' },
  ]);

module.exports = config;
