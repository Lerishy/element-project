const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //端口号
    port: 8888,
    //主机名
    host: "localhost",
    //是否自动开启浏览器
    open: true,
    //是否开启https
    https: false
  }
})