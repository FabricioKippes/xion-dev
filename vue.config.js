const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './src/scss/auto/*.scss'
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001'
      }
    }
  },
  outputDir: path.resolve(__dirname, './server/public')
}
