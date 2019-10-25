// 中文顶部导航
module.exports = [
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
  { text: '图片分享', link: '/share/picture/' },
  { text: '记录生活', link: '/life/' },
  // { text: '查看源码', link: 'https://github.com/babybazc/blog', target:'_blank' },
]
