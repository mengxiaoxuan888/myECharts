<template>
  <div class="ItemPage">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ItemPage'
}
</script>

<style scoped lang="less">
.ItemPage{
  height: 5.125rem;
  border: 1px solid rgb(125, 98, 231);
  margin: 0.25rem;
}
</style>
