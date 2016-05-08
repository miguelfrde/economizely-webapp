const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests'),
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Economizely',
      appMountId: 'app',
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
      },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app,
      },
    ],
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

if (TARGET === 'build' || TARGET === 'stats' || TARGET === 'deploy') {
  module.exports = merge(common, {});
}

if (TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {});
}
