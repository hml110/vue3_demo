<template>
  <h1>我是APP组件</h1>
  <h2>我是{{name}}</h2>
  <h2>{{age}}岁</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  //setup  值为一个函数
  //组件中所用到的：数据、方法等等，均要配置在setup中。
  setup: function () {
    //数据
    let name = '张三'
    let age = 18

    //方法
    function sayHello() {
      alert(`HelloWorld,我叫${name},我${age}岁了！`)
    }

    //返回值  返回一个对象
    return {
      name,
      age,
      sayHello,
    }

    //返回一个渲染函数
    // return () => h('h1', 'hml')
  },
}
</script>

<style>
</style>
