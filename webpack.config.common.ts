import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { pages } from './pages.config'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const entry: Configuration['entry'] = {}

pages.forEach(page => {
  entry[page.name] = `./src/entries/${page.name}.ts`
})

export const webpackConfigCommon: Configuration = {
  mode: 'development',
  stats: 'errors-only',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js?[contenthash:8]',
    clean: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
          priority: 10
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            inlineRequires: /@/,
            // helpers can only refer to .js file, so its .ts file should be compile before using
            helperDirs: path.resolve(__dirname, 'src/helpers/dist'),
            precompileOptions: {
              knownHelpersOnly: false
            },
            partialDirs: path.resolve(__dirname, 'src/partials')
          }
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]?[contenthash:8]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.wasm'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
      template: `./src/pages/${page.name}/index.hbs`,
      chunks: [page.name],
      filename: `${page.name}.html`,
      minify: false
    }))
  ]
}
