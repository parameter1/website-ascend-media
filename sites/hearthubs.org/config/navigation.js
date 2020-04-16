const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

module.exports = {
  /**
   * Default
   */
  default: {
    primary: {
      items: [
        { href: '/qcor', label: 'QCOR 2020 Conference' },
        { href: '/vascular', label: 'Vascular Discovery 2020 Conference' },
      ],
    },
    // @todo remove these
    secondary: {
      items: [
        { href: '#', label: 'Science News' },
        { href: '#', label: 'Learning Studios' },
      ],
    },
    tertiary: {
      items: [searchItem],
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
        items: [...userTools],
      },
    ],
  },

  contexts: [
    /**
     * Vascular
     */
    {
      when: ['/vascular'],
      primary: {
        items: [
          { href: '/vascular/science-news', label: 'Science News' },
          { href: '/vascular/2020-program', label: 'Vascular Discovery 2020 Program' },
          { href: '/vascular/learning-studios', label: 'Learning Studios' },
        ],
      },
      tertiary: {
        items: [searchItem],
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
          items: [...userTools],
        },
      ],
    },

    /**
     * QCOR
     */
    {
      when: ['/qcor'],
      primary: {
        items: [
          { href: '/qcor/science-news', label: 'Science News' },
          { href: '/qcor/2020-program', label: 'QCOR 2020 Program' },
          { href: '/qcor/learning-studios', label: 'Learning Studios' },
        ],
      },
      tertiary: {
        items: [searchItem],
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
          items: [...userTools],
        },
      ],
    },
  ],
};
