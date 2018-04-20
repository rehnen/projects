module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:80'
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md/,
          use: 'raw-loader'
        }
      ]
    }
  }
};
