<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";

export default {
  setup() {
    // 引入echarts,asiox
    let $echarts = inject("echarts");
    let $http = inject("axios");

    // 设置数据
    let data = reactive({});
    let xdata = reactive([]);
    let ydata = reactive([]);
    function setData() {
      xdata = data.data.oneData.chartData.map((v) => v.title);
      ydata = data.data.oneData.chartData.map((v) => v.num);
      console.log("xdata", xdata);
      console.log("ydata", ydata);
    }
    // axios发送请求，获取数据
    async function getState() {
      //发送请求
      data = await $http({ url: "/one/data" });
      //打印数据
      console.log(data.data.oneData.chartData)
    }
    // 生命周期，组件挂载到父组件中才会调用
    onMounted(() => {
      // 初始化图表
      let myChart = $echarts.init(document.getElementById("oneChart"));
      // 调用axios方法请求
      getState().then(() => {
        // 调用设置数据
        setData();
        // 设置图表
        myChart.setOption({
          grid:{//布局
            top:"3%",
            left:"1%",
            right:"6%",
            bottom:"3%",
            containLabel:true

          },
          xAxis: {//x轴是值
            type: "value",
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          yAxis: {//y轴是类目
            type: "category",
            data: xdata,
             axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          series: [
            {
              data: ydata,
              type: "bar",
              itemStyle: {
                normal: {
                  barBorderRadius:[0,20,20,0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
        });
      });
    });

    return {
      getState,
      data,
      xdata,
      ydata,
      setData,
    };
  },
};
</script>

<style scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>