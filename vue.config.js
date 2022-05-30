const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
 productionSourceMap: false,
 configureWebpack: {
  plugins: [
   new CopyWebpackPlugin({
    patterns: [
     {
      from: path.join(__dirname, 'src/assets'),
      to: path.join(__dirname, 'dist'),
      toType: 'dir'
     }
    ]
   })
  ]
 }
}
