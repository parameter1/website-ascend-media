const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/cvb-cities', label: 'CVB/Cities' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/venues', label: 'Venues' },
  { href: '/travel', label: 'Travel' },
  { href: '/safety-standards', label: 'Safety Standards' },
  { href: '/program', label: 'Program' },
  { href: 'https://www.planetimex.com', label: 'Planet IMEX', target: '_blank' },
];

const secondary = [
  { href: 'https://www.imexexhibitions.com', label: 'IMEX Group', target: '_blank' },
  { href: 'https://www.planetimex.com', label: 'Planet IMEX', target: '_blank' },
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
