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
  { href: '/2020-program', label: '2020 Schedule' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/UCM_503971_QCOR-2020-Science-News.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/qcor', label: 'Journals', target: '_blank' },
  { href: '/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const secondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/UCM_316906_QCOR-Scientific-Sessions.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://qcor.apprisor.org', label: 'ePosters Access', target: '_blank' },
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
