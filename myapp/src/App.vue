<template>
  <router-view/>
</template>

<script>
// 传递数据
import { provide } from 'vue'
// 引入图表插件
import * as echarts from 'echarts'
// 异步请求
import axios from 'axios'

//设置基准路径，就是获取服务器数据的地址，这样一旦路径变了，这里修改即可
axios.defaults.baseURL='http://127.0.0.1:3000'
// axios.defaults.baseURL='https://mengxiaoxuan888-effective-tribble-57gj5jx4xwj34gwq-3000.preview.app.github.dev'
// axios.defaults.baseURL = "/one";

export default ({
  setup() {
    // provider('名字随便起','传递的内容')
    provide('echarts',echarts)
    provide('axios',axios)
  },
})
</script>


<style lang="less">
body{
  background: url("~@/assets/bg.jpeg") top center no-repeat;
}
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
