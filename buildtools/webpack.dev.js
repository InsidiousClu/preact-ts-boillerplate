const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = require('./webpack.config');

const { PUBLIC_DIR } = require('./paths');


module.exports = merge(defaultConfig, {
  mode: 'development',
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, 'index.html')
    }),
    new webpack.EnvironmentPlugin({
      BROWSER_DEV: true
    })
  ]
});
