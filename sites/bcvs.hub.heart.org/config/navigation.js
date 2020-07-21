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
  { href: '/exhibitors', label: 'Exhibits' },
  { href: 'https://professional.heart.org/professional/EducationMeetings/EducationMeetings/UCM_505357_Science-News-for-BCVS-2020.jsp', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/bcvs', label: 'Journals', target: '_blank' },
  { href: '/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const secondary = [
  { href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/BCVS/UCM_316903_BCVS-Scientific-Sessions.jsp', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://bcvs.apprisor.org/epsWelcome.cfm?CFID=7409211&CFTOKEN=adb08ae7478bc8e5-186A09A9-ECE6-5163-C70E450D52629833', label: 'ePosters Access', target: '_blank' },
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
