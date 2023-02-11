<template>
  <div>
      <h2>库存统计</h2>
      <div class="chart" id="myEcharts">
          图表的容器
      </div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from "vue"
export default {
  setup(){
    //引入echarts,axios
    let $echarts=inject("echarts")
    let $http=inject("axios")

    let data=reactive({})

    // 发送axios请求
    async function getState(){
      data=await $http({url:"/three/data"})   
    }
    // 生命周期，组件挂载到父组件中才会调用
    onMounted(()=>{
      getState().then(()=>{
        console.log("饼状图",data)
        //初始化图表
       let myChart= $echarts.init(document.getElementById("myEcharts"))
       //设置图表
       myChart.setOption({
         legend:{
           top:"bottom"
         },
         tooltip:{
           show:true,

         },
         series:[
           {
             type:"pie",
             data:data.data.chartThree.chartData,
             radius:[10,100],
             center:["50%","45%"],
             roseType:"area",
             itemStyle:{
               borderRadius:10
             }
           }
         ]
       })
       
      })
    })
    return {
      getState,data   
    }
  }
}
</script>

<style>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
.chart{
  height: 4.5rem;
}
</style>