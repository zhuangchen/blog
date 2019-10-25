const {locales, themeConfigLocales} = require('./config.locales')
module.exports = (ctx) => ({
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
    locales: locales,
    themeConfig: {
      algolia: ctx.isProd? {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>'
      } : null,
      locales: themeConfigLocales
    }
})
