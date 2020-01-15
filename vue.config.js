const { resolve, join } = require('path');
const analyzer = require('webpack-bundle-analyzer');
require('./vue')(__dirname);

const { env } = process;
const product = env.NODE_ENV === 'production';
const basic = join(__dirname, 'src');
const entry = ['src/main.ts'];

if(!product) {
  entry.unshift('src/mock/index.ts');
}

module.exports = {
  pages: {
    index: {
      entry,
    },
  },

  productionSourceMap: false,

  css: {
    requireModuleExtension: true,
    sourceMap: true,
  },

  chainWebpack: (config) => {
    product
      && !!env.npm_config_analyzer
      && config
        .plugin('webpack-bundle-analyzer')
        .use(analyzer.BundleAnalyzerPlugin);
    const { alias: aliasQuote } = config.resolve;
    [
      ['@css', 'styles/module'],
    ].forEach(([ alias, path ]) => {
      const value = join(basic, path);
      aliasQuote.set(alias, value);
    });
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
