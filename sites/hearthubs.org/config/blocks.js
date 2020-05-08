module.exports = {
  leaderboard: {
    src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-cme-billboard.png',
    href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_316902_Vascular-Discovery-From-Genes-to-Medicine.jsp',
    contexts: [
      {
        when: ['/qcor'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/qcor-cme-billboard.png',
        href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_316906_QCOR-Scientific-Sessions.jsp',
      },
      {
        when: ['/vascular'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-cme-billboard.png',
        href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_316902_Vascular-Discovery-From-Genes-to-Medicine.jsp',
      },
    ],
  },
  exhibits: {
    src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-exhibits.png',
    href: 'https://www.hearthubs.org/vascular/exhibitors',
    contexts: [
      {
        when: ['/qcor'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/qcor-exhibits.png',
        href: '/qcor/exhibitors',
      },
      {
        when: ['/vascular'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-exhibits.png',
        href: 'https://www.hearthubs.org/vascular/exhibitors',
      },
    ],
  },
  eposters: {
    src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-eposters.png',
    href: 'https://atvb.apprisor.org',
    contexts: [
      {
        when: ['/qcor'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/qcor-eposters.png',
        href: 'https://qcor.apprisor.org',
      },
      {
        when: ['/vascular'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-eposters.png',
        href: 'https://atvb.apprisor.org',
      },
    ],
  },
  'early-career': {
    sectionAlias: 'vascular/early-career',
    href: 'https://earlycareervoice.professional.heart.org/blog',
    contexts: [
      {
        when: ['/qcor'],
        sectionAlias: 'qcor/early-career',
        href: 'https://www.google.com',
      },
      {
        when: ['/vascular'],
        sectionAlias: 'vascular/early-career',
        href: 'https://earlycareervoice.professional.heart.org/blog',
      },
    ],
  },
  'watch-listen': {
    sectionAlias: 'vascular/watch-listen',
    contexts: [
      {
        when: ['/qcor'],
        sectionAlias: 'qcor/watch-listen',
      },
      {
        when: ['/vascular'],
        sectionAlias: 'vascular/watch-listen',
      },
    ],
  },
  'science-news': {
    href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_506015_Science-News-for-Vascular-Discovery-2020.jsp',
    contexts: [
      {
        when: ['/qcor'],
        href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/QCOR/UCM_503971_QCOR-2020-Science-News.jsp',
      },
      {
        when: ['/vascular'],
        href: 'https://professional.heart.org/professional/EducationMeetings/MeetingsLiveCME/ATVBPVD/UCM_506015_Science-News-for-Vascular-Discovery-2020.jsp',
      },
    ],
  },
};
