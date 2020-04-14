const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  // set your styleguidist configuration here
  title: 'Yarn Writer Components',
  require: [
    path.join(__dirname, 'src/reset.css'),
    path.join(__dirname, 'src/main.scss'),
    path.join(__dirname, './styleguide.scss')
  ],
  defaultExample: false,
  pagePerSection: true,
  sections: [
    {
      name: 'Controls',
      components: 'src/components/controls/**/[A-Z]*.vue'
    },
    {
      name: 'Formatting',
      components: 'src/components/formatting/**/[A-Z]*.vue'
    },
    {
      name: 'Layout',
      components: 'src/components/layout/**/[A-Z]*.vue'
    },
    {
      name: 'Nodes',
      components: 'src/components/nodes/**/[A-Z]*.vue'
    },
    {
      name: 'Views',
      components: 'src/components/views/**/[A-Z]*.vue'
    }
  ],
  // webpackConfig: require('./node_modules/@vue/cli-service/webpack.config.js'),
  usageMode: 'collapse', // props, event, method, slot tables
  exampleMode: 'collapse',
  skipComponentsWithoutExample: true, // WriterThemeContext
  simpleEditor: true //,
}
