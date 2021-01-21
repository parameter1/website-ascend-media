const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');

module.exports = {
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [],
  gtm: {
    containerId: 'GTM-TV97VDV',
  },
  gcse: {
    id: '8fda9b5d0e7f9c0d5',
  },
  wufoo: {
    userName: 'notset',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/bulletin/image/static/bulletin.png',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: false,
    // directSend: true,
    // sendTo: 'DSanford@ascendintegratedmedia.com',
    // sendFrom: 'HeartHubs <reply@hearthubs.org>',
    // logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    // bgColor: '#ffffff',
  },
};
