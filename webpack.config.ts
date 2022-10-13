import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'development',
  entry: {index: './src/pages/index/index.ts'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            inlineRequires: "/images/",
            // helpers can only refer to .js file, so its .ts file should be compile before using
            helperDirs: path.resolve(__dirname, 'src/helpers/dist'),
            precompileOptions: {
              knownHelpersOnly: false,
            },
            partialDirs: path.resolve(__dirname, 'src/partials')
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index/template.hbs',
      chunks: ['index']
    })
  ]
}

export default config