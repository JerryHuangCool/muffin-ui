const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader")

const config = {
  // 打包模式（development 开发模式-使用相关内置优化）
  mode: 'development',
  devtool: 'source-map',
  // 入口
  // entry: path.resolve(__dirname, 'src/login/index.js'),
  entry: path.resolve(__dirname, 'main.ts'),
  // 出口
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true // 生成打包后内容之前，清空输出目录
  },
  // 插件（给 Webpack 提供更多功能）
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  // 加载器（让 webpack 识别更多模块文件内容）
  module: {
    rules: [
      {
        test: /\.vue$/i,
        // use: ['style-loader', "css-loader"],
        use: 'vue-loader'//加载器使用顺序从后向前，注意顺序
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
        loader: 'url-loader'
      },
      {// 识别样式
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]

      }
    ],
  },
  
  // 解析
  resolve: {
    // 别名
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
  }
}


module.exports = config