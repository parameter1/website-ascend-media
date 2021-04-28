const searchItem = {
  // href: '/search',
  // label: 'Search',
  // icon: 'search',
  // modifiers: ['search-icon'],
};

const userTools = [
  // { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  // { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: 'https://www.eventscribe.net//2021/AUA2021/', label: 'Program' },
  { href: '/industry-events', label: 'Industry Events' },
  { href: '/science-technology-hall', label: 'Science & Technology Hall' },
  { href: '/previews', label: 'Previews' },
];

const secondary = [
  { href: '#', label: 'Virtual AUA2021', target: '_blank' },
  { href: '#', label: 'Abstracts', target: '_blank' },
  { href: '#', label: 'Claim CME', target: '_blank' },
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
