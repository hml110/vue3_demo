<template>
  <h1>姓名：{{person}}</h1>
  <hr />
  <h1>x：{{x.y}}</h1>
  <button @click="x.y+=1">修改x</button>
  <hr />
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h1>薪资：{{salary}}</h1>
  <h1>薪资：{{job.j1.salary}}</h1>
  <button @click="name+='1'">修改名字</button>
  <button @click="age+=1">修改年纪</button>
  <button @click="job.j1.salary+='10'">涨薪水</button>

</template>

<script>
import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //数据响应式
    // let person = reactive({

    // 浅层次响应式  只考虑第一层的响应式
    let person = shallowReactive({
      name: '张三',
      age: 85,
      job: {
        j1: {
          salary: '30k',
        },
      },
    })

    //shallowRef  对于基本数据类型，没有区别
    //对于对象类型，会丢失响应式
    // let x = ref(0)
    // let x = shallowRef(0)
    let x = shallowRef({
      y: 1,
    })

    return {
      x,
      person,
      ...toRefs(person),
    }
  },
}
</script>

<style>
</style>