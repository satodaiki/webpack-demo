const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
    // publicPath: 'http://www.example.com/' // url-loaderのURL関数の値を自動でリトライする
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
        // use: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', ':data-src']
          }
        }
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // [.babelrc]ファイルに設定は外部化済み
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: [
        //         [
        //           'env',
        //           {'modules': false}
        //         ]
        //       ]
        //     }
        //   }
        // ],
        exclude: /node_modules/
      }
    ]
  }
  // plugins: [
  //   new ExtractTextPlugin('style.css')
  // ]
}
