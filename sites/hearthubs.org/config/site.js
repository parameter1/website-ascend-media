const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');

module.exports = {
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'http://www.twitter.com/American_Heart' },
    { provider: 'facebook', href: 'https://www.facebook.com/AmericanHeart' },
    { provider: 'instagram', href: 'http://instagram.com/american_heart' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/americanheartassoc' },
    { provider: 'pinterest', href: 'http://www.pinterest.com/americanheart/' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association' },
  ],
  gtm: {
    containerId: 'GTM-5RV2BC2',
  },
  gcse: {
    id: '003355913687346718228:arteokcijaj',
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
      logo: 'https://base.imgix.net/files/base/ascend/hearthub/AHA_icon.svg?h=60',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'HeartHubs <reply@hearthubs.org>',
    logo: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    bgColor: '#ffffff',
  },
};
