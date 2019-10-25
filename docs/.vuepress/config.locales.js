const {enNav, zhNav} = require('./nav')
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
      '/note/frontend/': [
        {
          title: 'css',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'html',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'javascript',
          collapsable: false,
          children: [
          ]
        },
        {
          title: '框架',
          collapsable: false,
          children: [
          ]
        }
      ]
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
