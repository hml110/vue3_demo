<template>
  <div id="app">
    <h1>我是父组件 </h1>
    <Suspense>
      <!-- 默认插槽 -->
      <template v-slot:default>
        <Child></Child>
      </template>
      <!-- 备用插槽 -->
      <template v-slot:fallback>
        <h3>稍等加载中。。。</h3>
      </template>
    </Suspense>

  </div>
</template>

<script>
// import Child from './components/Child.vue' // 静态引入
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child.vue')) //异步引入
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
