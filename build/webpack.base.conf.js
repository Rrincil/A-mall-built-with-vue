// webpack.base.conf.js
module.exports = {
  context: path.resolve(__dirname, '../'),
  /**
   * webpack入口文件
   */
  // 修改开始
  entry: utils.entries(),
  // 修改结束
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
}