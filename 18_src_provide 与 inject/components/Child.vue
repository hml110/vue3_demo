<template>
  <div class="child">
    <h2>我是子组件 {{name}}--{{price}}</h2>
    <Son></Son>
  </div>
</template>

<script>
import { reactive, toRefs, provide, inject } from 'vue'
import Son from '../components/Son.vue'
export default {
  name: 'Child',
  components: { Son },
  setup() {
    //当然，父与子推荐使用props
    let car = inject('car')

    return {
      ...toRefs(car),
    }
  },
}
</script>

<style scoped>
.child {
  background-color: rgb(121, 29, 226);
  padding: 10px;
}
</style>