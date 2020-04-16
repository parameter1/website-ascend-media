module.exports = {
  navbar: {
    src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    srcset: [
      'https://base.imgix.net/files/base/ascend/hearthub/image/static/footer.svg?h=180 2x',
    ],
    href: '/',
    contexts: [
      {
        when: ['/vascular'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-discovery.png?h=90',
        srcset: [
          'https://base.imgix.net/files/base/ascend/hearthub/image/static/vascular-discovery.png?h=180 2x',
        ],
        href: '/vascular',
        title: 'Vascular Discovery: From Genes to Medicine',
      },
      {
        when: ['/qcor'],
        src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/qcor.png?h=90',
        srcset: [
          'https://base.imgix.net/files/base/ascend/hearthub/image/static/qcor.png?h=180 2x',
        ],
        href: '/qcor',
        title: 'Quality of Care & Outcomes Reasearch (QCOR)',
      },
    ],
  },
  footer: {
    src: 'https://base.imgix.net/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    srcset: [
      'https://base.imgix.net/files/base/ascend/hearthub/image/static/footer.svg?h=180 2x',
    ],
  },
};
