module.exports = {
  title: 'vuepress',
  description: '试一下',
  base: '/blog/',
  markdown: {
    lineNumbers: true  // 代码行号显示
  },
  locales: {
   // 键名是该语言所属的子路径
   // 作为特例，默认语言可以使用 '/' 作为其路径。
   '/en/': {
     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
     title: 'VuePress',
     description: 'Vue-powered Static Site Generator'
   },
   '/': {
     lang: 'zh-CN',
     title: 'VuePress',
     description: 'Vue 驱动的静态网站生成器'
   }
 }
}
