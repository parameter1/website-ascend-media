const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  // { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  // { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/whats-new', label: 'What\'s New' },
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-programs', label: 'Industry Programs' },
  { href: '/exhibit-hall', label: 'Exhibit Hall' },
  { href: 'https://lms.aad.org/MeetingWebApp/Sessions/index/SM2021', label: 'Meeting Program', target: '_blank' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: 'https://www.aad.org/member/meetings-education/sm21/registration', label: 'Registration', target: '_blank' },
  // { href: '#', label: 'Abstracts', target: '_blank' },
  // { href: '#', label: 'Claim CME', target: '_blank' },
];

module.exports = {

  primary: {
    items: [...topics],
  },
  secondary: {
    items: [...secondary],
  },
  tertiary: {
    items: [searchItem],
  },
  menu: [
    {
      label: 'Topics',
      items: [...topics],
    },
    {
      label: 'Resources',
      items: [...secondary],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};
