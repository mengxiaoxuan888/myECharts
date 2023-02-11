<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  setup() {
    // let $echarts = inject("echarts");
    let $http = inject("axios");


    async function getState() {
     const data = await $http({ url: "/one/data" });
      console.log(data)
      // console.log(oneData.data.chartData.chartData)
    }

    onMounted(() => {
      getState()
    });

    return {
      getState
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