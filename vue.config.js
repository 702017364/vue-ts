const { resolve, join } = require('path');
const analyzer = require('webpack-bundle-analyzer');

const basic = join(__dirname, 'src'); 

module.exports = {
  productionSourceMap: false,

  css: {
    requireModuleExtension: true,
    sourceMap: true
  },

  chainWebpack: (config) => {
    const { env } = process;
    env.NODE_ENV === 'production'
      && !!env.npm_config_analyzer
      && config
        .plugin('webpack-bundle-analyzer')
        .use(analyzer.BundleAnalyzerPlugin);
    const { alias: aliasQuote } = config.resolve;
    const alias = (alias, path) => aliasQuote.set(alias, join(basic, path));
    alias('@const', 'const');
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve(__dirname, './src/styles/_imports.scss')
      ]
    }
  }
}
