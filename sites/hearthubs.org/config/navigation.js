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

const conferences = [
  { href: '/qcor', label: 'Quality of Care & Outcomes Reasearch (QCOR)' },
  { href: '/vascular', label: 'Vascular Discovery: From Genes to Medicine' },
];

const vascularTopics = [
  { href: '/vascular/2020-program', label: '2020 Program' },
  { href: '/vascular/exhibitors', label: 'Virtual Exhibits' },
  { href: 'https://professional.heart.org/professional/General/UCM_477021_View-All-Science-News.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://professional.heart.org/professional/index.jsp', label: 'Professional Heart Daily', target: '_blank' },
  { href: '/vascular/partners', label: 'Partners' },
  { href: 'https://aha.ondemand.org/aha/live/53/page/513', label: 'CME', target: '_blank' },
  {
    href: 'https://aha.ondemand.org/aha/live/53/page/513',
    label: 'ePOSTERS',
    modifiers: ['text-transform-none'],
    target: '_blank',
  },
];

const qcorTopics = [
  { href: '/qcor/science-news', label: 'Science News' },
  { href: '/qcor/2020-program', label: '2020 Program' },
  { href: '/qcor/learning-studios', label: 'Learning Studios' },
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
        items: [...conferences],
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
        items: [...vascularTopics],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...vascularTopics],
        },
        {
          label: '2020 Conferences',
          items: [...conferences],
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
        items: [...qcorTopics],
      },
      tertiary: {
        items: [searchItem],
      },
      menu: [
        {
          label: 'Topics',
          items: [...qcorTopics],
        },
        {
          label: '2020 Conferences',
          items: [...conferences],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },
  ],
};
