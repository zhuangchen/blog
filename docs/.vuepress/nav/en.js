// 英文顶部导航
module.exports = [
  { text: 'home', link: '/' },
  {
    text: 'note',
    ariaLabel: 'note menu',
    items: [
      { text: 'frontend', link: '/note/frontend/' },
      { text: 'backend', link: '/note/backend/' },
      { text: 'tool', link: '/note/tool/' },
      { text: 'tip', link: '/note/tip/' }
    ]
  },
  { text: 'picture', link: '/share/picture/' },
  { text: 'life', link: '/life/' },
  // { text: '查看源码', link: 'https://github.com/babybazc/blog', target:'_blank' },
]
