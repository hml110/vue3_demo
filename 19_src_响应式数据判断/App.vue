<template>
  <div id="app">
    <h1>我是父组件 </h1>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: '奔驰',
      price: '50w',
    })
    let sum = ref(0)
    let sum2 = 0
    let car2 = readonly(car)

    // `isRef`: 检查一个值是否为一个 `ref` 对象
    //  `isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
    //  `isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
    //  `isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
    console.log(isRef(sum)) //true
    console.log(isRef(sum2)) //false
    console.log(isReactive(car)) //true
    console.log(isReactive(car2)) //true
    console.log(isReadonly(car2)) //true
    console.log(isProxy(car2)) //true
    console.log(isProxy(sum)) //false

    return {}
  },
  components: {},
}
</script>

<style scoped>
#app {
  background-color: dimgrey;
  padding: 10px;
}
</style>
