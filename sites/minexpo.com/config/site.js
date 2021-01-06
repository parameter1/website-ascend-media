const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');

module.exports = {
  leaders,
  navigation,
  nativeX,
  company: 'MINExpo Show Directory',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
      srcset: [
        'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
      srcset: [
        'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    // { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    // { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    // { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-5MBFGGJ',
    slotPrefix: 'pw',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'support@parameter1.com',
    replyTo: 'support@parameter1.com',
    sendFrom: 'MINExpo Show Directory <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets-ascend.imgix.net/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
    bgColor: '#000',
  },
};
