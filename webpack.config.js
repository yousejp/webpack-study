const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.resolve(__dirname, 'dist');
// console.log({ outputPath });

/* 
npx webpack --config (ディレクトリとファイル名)webpack.config.js
上記でwebpackの設定ファイルを明示的に指定できる
*/

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      // scssはcssと互換性があるので(sc|c)というorの書き方ができる
      // {
      //   test: /\.css$/,
      //   // \はoption + ¥で表示できる
      //   // use: ['style-loader', 'css-loader'],
      //   use: ['MiniCssExtractPlugin.loader', 'css-loader'],
      //   // webpackではloaderが逆順に読み込まれる
      //   // use: ['css-loader', 'style-loader']ではエラーになる
      // },
      {
        test: /\.(sc|c)ss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // プラグインは''で囲わないように注意
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        // (jpe?g | png |このように間隔を開けるとエラーになる
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    // [hash]はキャッシュにかからないために使用
  ],
};
