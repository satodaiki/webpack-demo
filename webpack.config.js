const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production', // productionモードにするとoptimization - minimizerを有効化することができる
  // devtool: 'eval-source-map', // optimization - minimizerを有効化するにはここもコメントアウト
  entry: { // 複数エントリポイントの処理
    main: './src/main.js',
    sub: './src/sub.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name]-[chunkhash].js',
    // publicPath: 'http://www.example.com/' // url-loaderのURL関数の値を自動でリトライする
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: false
          }
        }
      })
    ],
    splitChunks: {
      name: 'commonlib',
      chunks: 'initial'
    }
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
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: ['img:src', ':data-src']
      //     }
      //   }
      // },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.js$/,
        // loader: 'babel-loader',
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // ローダーは記述の逆順にコンパイルされる
      }
      // {
      //   enforce: 'pre', // 同じ拡張子に対して、enforce='pre'のテストのほうが優先的に実行される
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     fix: false,
      //     failOnError: true
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '速習webpack',
      filename:"index.html",
      template:"src/index.html",
      copyright: '2018-2019 YAMADA Yoshihiro'
    }),
    new CleanWebpackPlugin(),
  ],
  // インポート時に認識する拡張子
  // 既定は['.js', '.json']のみ
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  // plugins: [
  //   new ExtractTextPlugin('style.css')
  // ]
}
