module.exports = {
  /**
   * QCOR
   */
  qcor: {
    secondary: {
      items: [
        { href: '/qcor/science-news', label: 'Science News' },
        { href: '/qcor/2020-program', label: 'QCOR 2020 Program' },
        { href: '/qcor/learning-studios', label: 'Learning Studios' },
      ],
    },
    tertiary: {
      items: [
        { href: '/search', label: 'Search', icon: 'search' },
      ],
    },
    menu: [
      {
        label: 'Topics',
        items: [
          { href: '/qcor/science-news', label: 'Science News' },
          { href: '/qcor/2020-program', label: 'QCOR 2020 Program' },
          { href: '/qcor/learning-studios', label: 'Learning Studios' },
        ],
      },
      {
        label: '2020 Conferences',
        items: [
          { href: '/qcor', label: 'Quality of Care & Outcomes Reasearch (QCOR)' },
          { href: '/vascular', label: 'Vascular Discovery: From Genes to Medicine' },
        ],
      },
      {
        label: 'User Tools',
        items: [
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
          { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        ],
      },
    ],
  },
  /**
   * Vascular
   */
  vascular: {
    secondary: {
      items: [
        { href: '/vascular/science-news', label: 'Science News' },
        { href: '/vascular/2020-program', label: 'Vascular Discovery 2020 Program' },
        { href: '/vascular/learning-studios', label: 'Learning Studios' },
      ],
    },
    tertiary: {
      items: [
        { href: '/search', label: 'Search', icon: 'search' },
      ],
    },
    menu: [
      {
        label: 'Topics',
        items: [
          { href: '/vascular/science-news', label: 'Science News' },
          { href: '/vascular/2020-program', label: 'Vascular Discovery 2020 Program' },
          { href: '/vascular/learning-studios', label: 'Learning Studios' },
        ],
      },
      {
        label: '2020 Conferences',
        items: [
          { href: '/qcor', label: 'Quality of Care & Outcomes Reasearch (QCOR)' },
          { href: '/vascular', label: 'Vascular Discovery: From Genes to Medicine' },
        ],
      },
      {
        label: 'User Tools',
        items: [
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
          { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        ],
      },
    ],
  },
  /**
   * Site defaults -- when not actively under a conference
   */
  primary: {
    items: [
    ],
  },
  secondary: {
    // List available conferences
    items: [
      { href: '/qcor', label: 'QCOR 2020 Conference' },
      { href: '/vascular', label: 'Vascular Discovery 2020 Conference' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  menu: [
    {
      label: '2020 Conferences',
      items: [
        { href: '/qcor', label: 'Quality of Care & Outcomes Reasearch (QCOR)' },
        { href: '/vascular', label: 'Vascular Discovery: From Genes to Medicine' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      ],
    },
  ],
};
