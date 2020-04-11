/* eslint-disable indent, @typescript-eslint/no-var-requires */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    // onigasm wasm for monaco-textmate
    config.module
      .rule('OnigasmWasm')
        .test(/\.wasm$/)
        .type('javascript/auto')
        .use('file-loader')
        .loader('file-loader')
    // monaco-editor-webpack for monaco-editor to make its AMD modules usable via es6/webpack and config it
    config.plugin('MonacoWebpack')
      .use(MonacoWebpackPlugin, [{
        languages: [] // we only care about yarn so we leave out all other languages
        // features: [] // TODO:OPTIM: we could enable limited features, if we knew what those features do
      }])
  }
}
