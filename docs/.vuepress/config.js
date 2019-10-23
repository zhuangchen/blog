module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true  // 代码行号显示
  },
  // 格外监听的文件
  extraWatchFiles: [
  ],
  // 插件
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      '@vuepress/last-updated'
    ],
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  // 多语言配置
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
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习笔记',
        ariaLabel: '学习笔记 菜单',
        items: [
          { text: '前端开发', link: '/note/frontend/' },
          { text: '后端开发', link: '/note/backend/' },
          { text: '工具', link: '/note/tool/' },
          { text: '小技巧', link: '/note/tip/' }
        ]
      },
      { text: '图片分享', link: '/share/pic/' },
      { text: '记录生活', link: '/life/' },
      { text: '查看源码', link: 'https://github.com/babybazc/blog', target:'_blank' },
    ],
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
  }
}
