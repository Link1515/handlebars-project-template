import { merge } from 'webpack-merge'
import { webpackConfigCommon } from './webpack.config.common'

const webpackConfigDev = merge(webpackConfigCommon, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})

export default webpackConfigDev
