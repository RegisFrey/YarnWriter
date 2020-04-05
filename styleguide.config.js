import path from 'path'

module.exports = {
  // set your styleguidist configuration here
  title: 'Yarn Writer Components',
  require: [
    path.join(__dirname, 'src/reset.css'),
    path.join(__dirname, 'src/main.scss')
  ],
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: require('./node_modules/@vue/cli-service/webpack.config.js'),
  exampleMode: 'expand'
}
