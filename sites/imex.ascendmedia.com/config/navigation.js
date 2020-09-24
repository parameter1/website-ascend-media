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
  { href: '/', label: 'Safety Standards' },
  { href: '/', label: 'Program' },
  { href: '/', label: 'Planet IMEX' },
];

const secondary = [
  { href: '/', label: 'IMEX Group', target: '_blank' },
  { href: '/', label: 'Planet IMEX', target: '_blank' },
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
