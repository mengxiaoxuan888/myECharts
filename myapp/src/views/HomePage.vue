<template>
  <div>
    <header>
      <h1>数据可视化项目开发</h1>
    </header>
    <!-- 主体部分大盒子 -->
    <section class="container">
      <!-- 左部分 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne></ItemOne>
        </ItemPage>
        <ItemPage>
          <ItemTwo/>
        </ItemPage>
      </section>
      <!-- 中间部分 -->
      <section class="itemCenter">
        
      </section>
      <!-- 右部分 -->
      <section class="itemRight">
        <ItemPage>
          <ItemThree/>
        </ItemPage>
        <ItemPage>
          <ItemFour/>
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue'
import ItemOne from '@/components/ItemOne.vue'
import ItemTwo from '@/components/ItemTwo.vue'
import ItemThree from '@/components/ItemThree.vue'
import ItemFour from '@/components/ItemFour.vue'
// 接收数据
import {inject} from 'vue'
export default {
    name: 'HomePage',
    components:{
      ItemPage,ItemOne,ItemTwo,ItemThree,ItemFour
    },
    setup() {
      //要接收的数据名称
      let $echarts = inject('echarts')
      console.log($echarts)
      let $http = inject('axios')
      console.log($http)
    }
}
</script>

<style lang="less">
header{
  height: 5rem;
  width: 100%;
  background-color: rgba(94, 94, 96, 0.1);
  h1{
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    line-height: 5rem;
  }
}

.container{
  color: #fff;
  min-width: 1200px;
  max-width: 2048px;
  padding: 0 auto;
  // border: 3px solid red;
  margin: .625rem .625rem 0;
  display: flex;
  .itemLeft,.itemRight{
    flex: 3;
  }
  .itemCenter{
    flex: 5;
    height: 37.5rem;
    border: .0625rem solid blue;
    margin: 1.25rem;
    padding: 1.25rem;
  }
}
</style>