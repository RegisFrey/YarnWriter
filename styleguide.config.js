const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  // set your styleguidist configuration here
  title: 'Yarn Writer Components',
  require: [
    path.join(__dirname, 'src/reset.css'),
    path.join(__dirname, 'src/main.scss')
  ],
  // components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.vue'
    },
    {
      name: 'Views',
      components: 'src/views/**/[A-Z]*.vue'
    }
  ],
  // webpackConfig: require('./node_modules/@vue/cli-service/webpack.config.js'),
  exampleMode: 'expand',
  skipComponentsWithoutExample: true, // WriterThemeContext
  simpleEditor: true
}
