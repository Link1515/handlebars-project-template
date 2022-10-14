module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        grid: true,
        overrideBrowserslist: [
          '> 1%',
          'last 5 versions',
          'Firefox >= 45',
          'ios >= 8',
          'ie >= 10'
        ]
      }
    }
  }
}
