const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // configureWebpack: {
  //   devServer: {
  //     proxy: {
  //        "/one": {//捕获API的标志，如果API中有这个字符串，那么就开始匹配代理，
  //          target: "https://mengxiaoxuan888-effective-tribble-57gj5jx4xwj34gwq-3000.preview.app.github.dev",//代理的api地址，就是要跨域的地址
  //          changeOrigin: true,// 这个参数可以让target参数是域名
  //          pathRewrite: {//对路径匹配到的字符串重写
  //           "^/one": "/"
  //         },
  //       },
  //     },
  //   },
  // }
})
