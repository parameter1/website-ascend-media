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

const vascularTopics = [
  { href: '/vascular/2020-program', label: '2020 Schedule' },
  { href: '/vascular/exhibitors', label: 'Exhibits' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_506015_Science-News-for-Vascular-Discovery-2020.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/vascular-discovery', label: 'Journals', target: '_blank' },
  { href: '/vascular/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const vascularSecondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_316902_Vascular-Discovery-From-Genes-to-Medicine.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://atvb.apprisor.org/epsWelcome.cfm?CFID=7228878&CFTOKEN=6bd6a3b1644b521d-0AB2008E-B509-9A77-C30CC77ABC062245', label: 'ePosters Access', target: '_blank' },
];

const qcorTopics = [
  { href: '/qcor/2020-program', label: '2020 Schedule' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_503971_QCOR-2020-Science-News.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/qcor', label: 'Journals', target: '_blank' },
  { href: '/qcor/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const qcorSecondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_316906_QCOR-Scientific-Sessions.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://qcor.apprisor.org/epsWelcome.cfm?CFID=7271910&CFTOKEN=d4842b3aeb1d1a53-0642894E-082E-D553-C4F96F1A8B473A11', label: 'ePosters Access', target: '_blank' },
];

module.exports = {
  /**
   * Default
   */
  default: {
    primary: {
      items: [...vascularTopics],
    },
    secondary: {
      items: [...vascularSecondary],
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
        label: 'Resources',
        items: [...vascularSecondary],
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
      secondary: {
        items: [...vascularSecondary],
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
          label: 'Resources',
          items: [...vascularSecondary],
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
      secondary: {
        items: [...qcorSecondary],
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
          label: 'Resources',
          items: [...qcorSecondary],
        },
        {
          label: 'User Tools',
          items: [...userTools],
        },
      ],
    },
  ],
};
