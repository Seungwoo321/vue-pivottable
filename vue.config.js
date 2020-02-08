const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, 'src/assets'),
        to: path.join(__dirname, 'dist'),
        toType: 'dir'
      }]),
      new BundleAnalyzerPlugin()
    ]
  }
}
