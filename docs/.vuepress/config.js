
module.exports = {
  base: '/vue-pivottable/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePivottable',
      description: 'It is a Vue port of the jQuery-based PivotTable.js',
    }
    // '/ko/': {
    //   lang: 'ko-KR',
    //   title: 'VuePivottable',
    //   description: 'It is a Vue port of the jQuery-based PivotTable.js',
    // },
  },
  plugins: [
    [
      '@vuepress/back-to-top'
    ],
    [
      '@vuepress/nprogress'
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics', {
        'ga': 'G-TN13CSYPZR'
      }
    ],
  ],
  head: [
    ['meta', { name: 'application-name', content: 'VuePivottable' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePivottable' }],
  ],
  themeConfig: {
    repo: 'seungwoo321/vue-pivottable',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced')
        }
      }
      // '/ko/': {
      //   label: '한국어',
      //   selectText: '언어 변경',
      //   ariaLabel: '언어 변경',
      //   editLinkText: 'GitHub에서 수정하기',
      //   lastUpdated: '최근 수정 날짜',
      //   nav: require('./nav/ko'),
      //   sidebar: {
      //     '/ko/guide/': getGuideSidebar('가이드', 'Advanced')
      //   }
      // }
    }
  }
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'locale',
        'slot',
        'scoped-slot',
        'utilities'
      ]
    }
  ]
}
