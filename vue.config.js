module.exports = {
  indexPath: '/demo/',
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'demo/index.html',
      filename: 'index.html',
      title: 'Index Page'
    }
  }
  // publicIgnore: ['public']
  // chainwebpack: config => {
  //     config.plugin('copy').tap(([options]) => {
  //         options[0].ignore.push('public')
  //         return [options]
  //     })
  // }
}
