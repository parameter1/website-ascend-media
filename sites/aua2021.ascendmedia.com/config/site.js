const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');

module.exports = {
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/au_antigua?lang=en', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/AmerUrological/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/amerurological/?hl=en', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCfBo9pjCePu7Wxn4j4fHyAw', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-urological-association/', target: '_blank' },
  ],
  // gtm: {
  //   containerId: 'NOT-SET',
  // },
  // gcse: {
  //   id: 'NOT-SET',
  // },
  // wufoo: {
  //   userName: 'NOT-SET',
  // },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: false,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AUA <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    bgColor: '#ffffff',
  },
};
