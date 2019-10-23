module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    lineNumbers: true  // 代码行号显示
  },
  locales: {
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
  },
  themeConfig: {
    locales: {
      '/en/': {
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
  }
}
