var path = require('path')
var webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
        app: ['./src/main.js'],
        // 把共用的库放到vendor.js里
        vendor: [
            'babel-polyfill',
            'vue',
            'vue-router'
        ]
    },
  output: {
    path: path.resolve(__dirname, './dist'),

    // 因为用到了 html-webpack-plugin 处理HTML文件。处理后的HTML文件都放到了
    // dist文件夹里。html文件里面js的相对路径应该从使用 html-webpack-plugin 前
    // 的'/dist/' 改成 '/'
    publicPath: '/',
    // publicPath: '/dist/',
    filename: '[name].[hash].js'
    // filename:'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // font loader
      {
        test: /\.(ttf|eot|woff|svg)$/i,
        loader: 'url-loader'
      },
      // 图片处理
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '1000',
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(docx)$/,
        loader: 'url-loader',
        options: {
          limit: '10',
          name: '[name].[ext]'
        }
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // }
    ]
  },
  plugins:[
    // 把共用的库放到vendor.js里
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    // 编译HTML。目的：在生产环境下，为了避免浏览器缓存，需要文件按照哈希值重命名。
    // 这里编译可以自动更改每次编译后引用的js名称。
    new HTMLPlugin({template: 'index.template.html'})
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
