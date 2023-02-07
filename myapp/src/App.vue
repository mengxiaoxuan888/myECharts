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
