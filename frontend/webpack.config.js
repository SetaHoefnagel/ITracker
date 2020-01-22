/*
 * Copyright 2019 - Albert Hoefnagel
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
            {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
    resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, '../', 'frontend/dist')
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  }
};