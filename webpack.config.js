const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      {
        test: /\.css$/,
        // \はoption + ¥で表示できる
        use: ['style-loader', 'css-loader'],
        // webpackではloaderが逆順に読み込まれる
        // use: ['css-loader', 'style-loader']ではエラーになる
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
  ],
};
