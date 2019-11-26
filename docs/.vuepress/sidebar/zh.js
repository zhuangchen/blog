const { fs, path } = require('@vuepress/shared-utils')
const css = fs
  .readdirSync(path.resolve(__dirname, './../../note/frontend/css'))
  .map(filename => 'css/' + filename.slice(0, -3))
  .sort()
const js = fs
  .readdirSync(path.resolve(__dirname, './../../note/frontend/js'))
  .map(filename => 'js/' + filename.slice(0, -3))
  .sort()
const getFrontendSidebar = () => {
  return [
    {
      title: 'css',
      collapsable: false,
      children: [['','css规范'],...css],
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
      children: js,
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
