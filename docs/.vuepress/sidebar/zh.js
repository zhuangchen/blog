const { fs, path } = require('@vuepress/shared-utils')
const css = fs
  .readdirSync(path.resolve(__dirname, './../../note/frontend/css'))
  .map(filename => 'css/' + filename.slice(0, -3))
  .sort()
const getFrontendSidebar = () => {
  return [
    {
      title: 'css',
      collapsable: false,
      children: css
    },
    {
      title: 'html',
      collapsable: false,
      children: [
      ]
    },
    {
      title: 'js',
      collapsable: false,
      children: [
      ]
    },
    {
      title: '框架',
      collapsable: false,
      children: [
      ]
    },
  ]
}
module.exports = {
  getFrontendSidebar
}
