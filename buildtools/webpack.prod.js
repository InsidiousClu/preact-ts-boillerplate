const merge = require('webpack-merge');
const Terser = require('terser-webpack-plugin');

const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new Terser()],
    splitChunks: {
      chunks: 'all',
    },
  },
});
