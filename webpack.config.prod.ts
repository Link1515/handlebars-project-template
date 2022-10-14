import { merge } from 'webpack-merge'
import { webpackConfigCommon } from './webpack.config.common'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const webpackConfigDev = merge(webpackConfigCommon, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[contenthash:8]'
    })
  ]
})

export default webpackConfigDev
