<template>
  <div id="app">
    <h1>我是父组件 {{name}}--{{price}}</h1>
    <Child></Child>

  </div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: '奔驰',
      price: '50w',
    })

    provide('car', car) //给自己的后代组件提供数据

    return {
      ...toRefs(car),
    }
  },
  components: { Child },
}
</script>

<style scoped>
#app {
  background-color: dimgrey;
  padding: 10px;
}
</style>
