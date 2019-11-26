const {enNav, zhNav} = require('./nav')
const {enSidrbar, zhSidebar} = require('./sidebar')
const locales = {
  '/en/': {
    lang: 'en-US',
    title: 'en',
    description: 'Blog Built By Vuepress'
  },
  '/': {
    lang: 'zh-CN',
    title: '中文',
    description: 'vuepress搭建的博客'
  }
}
const themeConfigLocales = {
  '/en/': {
    nav: enNav,
    sidebar: {
      '/en/note/frontend/': [],
      '/en/note/backend/': [],
      '/en/note/tool/': [],
      '/en/note/tip/': [],
      '/en/share/picture/': [],
      '/en/life/': []
    },
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  },
  '/': {
    nav: zhNav,
    sidebar: {
      '/note/frontend/': zhSidebar.getFrontendSidebar(),
      '/note/backend/': [],
      '/note/tool/': [],
      '/note/tip/': [],
      '/share/picture/': [],
      '/life/': [],
    },
    lastUpdated: '更新时间',
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    }
  }
}
module.exports = {
  locales,
  themeConfigLocales
}
