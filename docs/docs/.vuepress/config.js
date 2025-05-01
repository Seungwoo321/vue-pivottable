import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {
  head,
  navbarEn,
  navbarKo,
  sidebarEn,
  sidebarKo,
} from './configs/index.js'

export default defineUserConfig({
  lang: 'en-US',
  base: '/vue-pivottable/',

  head,

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Pivottable (Vue2)',
      description: 'It is a Vue port of the jQuery-based PivotTable.js',
    },
    '/ko/': {
      lang: 'ko-Kr',
      title: 'Vue Pivottable (Vue2)',
      description: 'jQuery 기반의 PivotTable.js를 Vue로 포팅한 것입니다',
    },
  },

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'seungwoo321/vue-pivottable',
    docsDir: 'packages/docs',
    docsBranch: 'master',
    externalLinkIcon: true,
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      '/ko/': {
        navbar: navbarKo,
        selectLanguageName: '한국어',
        selectLanguageText: '언어 선택',
        selectLanguageAriaLabel: '언어 선택',
        sidebar: sidebarKo,
        editLinkText: 'GitHub에서 이 페이지 편집하기',
        lastUpdatedText: '마지막 업데이트',
        contributorsText: '기여자',
        tip: '팁',
        warning: '주의',
        danger: '경고',
        notFound: [
          '여기엔 아무것도 없어요',
          '우리가 어떻게 여기에 왔죠?',
          '404 페이지입니다',
          '잘못된 링크로 들어온 것 같아요',
        ],
        backToHome: '홈으로 돌아가기',
        openInNewWindow: '새 창에서 열기',
        toggleColorMode: '색상 모드 전환',
        toggleSidebar: '사이드바 전환',
      }
    }
  }),
  contributors: true,
  lastUpdated: true,
  bundler: viteBundler(),

  plugins: [
    // googleAnalytics({
    //   id: 'G-G8TZ5WYL3Z'
    // })
  ]
})

