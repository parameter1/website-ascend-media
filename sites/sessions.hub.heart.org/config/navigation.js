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
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/sessions-news', label: 'Sessions News' },
  { href: '/exhibit-hall', label: 'Exhibit Hall' },
  { href: 'https://www.abstractsonline.com/pp8/?_ga=2.140435381.745270711.1600646659-1625070034.1488231316&_gac=1.156885705.1600893149.CjwKCAjw5Kv7BRBSEiwAXGDElWMcV2l5HPrLc-QIktDav4HMJSo9-pYXbWDn5oGjf3_MIknW51y0fxoCakoQAvD_BwE#!/9144/', label: 'Program' },
  { href: 'https://professional.heart.org/en/meetings/scientific-sessions/programming/cme-ce-credit', label: 'Claim CME', target: '_blank' },
];

const secondary = [
  { href: '#', label: 'Virtual Experience Access', target: '_blank' },
  { href: '#', label: 'ePosters Access', target: '_blank' },
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
