<template>
  <div class="son">
    <h3>我是孙组件 {{name}}--{{price}}</h3>
  </div>
</template>

<script>
import { reactive, toRefs, provide, inject } from 'vue'
export default {
  name: 'Son',
  setup() {
    let car = inject('car')

    return {
      ...toRefs(car),
    }
  },
}
</script>

<style scoped>
.son {
  background-color: rgb(191, 12, 51);
  padding: 10px;
}
</style>