<template>
  <div class="child">
    <h2>我是子组件</h2>
    {{sum}}
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Child',
  components: {},
  //实现等一等加载的效果
  async setup() {
    let sum = ref(0)

    //Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
    //实现等一等加载的效果
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })

    return await p

    //or Use only the following

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ sum })
    //   }, 3000)
    // })
  },
}
</script>

<style scoped>
.child {
  background-color: rgb(121, 29, 226);
  padding: 10px;
}
</style>