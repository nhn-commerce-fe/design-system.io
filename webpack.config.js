const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  devServer: {
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3002,
    hot: true,
    static: {
      directory: resolve(__dirname, 'public'),
    },
  },
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|mp4|ico)$/,
        loader: 'file-loader',
        dependency: { not: ['url'] },
        options: {
          name: '[name].[ext]',
        },
        type: 'javascript/auto',
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new Dotenv({
      path: resolve(__dirname, `../../.env.${mode}`),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      env: process.env,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, './assets/images'),
          to: resolve(__dirname, 'dist/images'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
    new SpritesmithPlugin({
      src: {
        cwd: resolve(__dirname, './assets/images/image-each'),
        glob: '*.png',
      },
      target: {
        image: resolve(__dirname, './assets/images/sprite.png'),
        css: resolve(__dirname, './assets/styles/sprite.scss'),
      },
    }),
  ],
  stats: {
    loggingDebug: ['sass-loader'],
  },
  output: {
    clean: true,
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    asyncChunks: true,
  },
};
