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
  height: 18.125rem;
  border: .0625rem solid rgb(125, 98, 231);
  margin: 1.25rem;
}
</style>
