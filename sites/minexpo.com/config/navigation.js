const topics = [
  { href: '/directory', label: 'Directory' },
];

module.exports = {
  primary: {
    items: [
    ],
  },
  secondary: {
    items: [...topics],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      // { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      // { href: '/page/pw-about-us', label: 'About' },
      // { href: '/page/pw-contact-us', label: 'Contact' },
      // { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      // { href: '/page/pw-terms-use', label: 'Terms of Use' },
      // { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [...topics],
    },
    {
      label: 'Resources',
      items: [
      ],
    },
    {
      label: 'User Tools',
      items: [
      ],
    },
  ],
};
