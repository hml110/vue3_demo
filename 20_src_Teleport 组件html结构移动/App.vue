<template>
  <div id="app">
    <h1>我是父组件 </h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    Child,
  },
}
</script>

<style scoped>
#app {
  background-color: dimgrey;
  padding: 10px;
}
</style>
