module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  indexPath: '/demo/',
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'demo/index.html',
      filename: 'index.html',
      title: 'Index Page'
    }
  }
}
