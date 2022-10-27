const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,     // 端口
  },
  lintOnSave:false //关闭eslint检查
})
