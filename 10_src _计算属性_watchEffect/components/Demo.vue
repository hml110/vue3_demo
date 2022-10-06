<template>
  <h1>当前求和为：{{sum}}</h1>
  <button @click="sum++">点我+1</button>

  <br>
  <hr />

  <h1>当前为：{{msg}}</h1>
  <button @click="msg+='1'">修改</button>

  <br>
  <hr />

  <h1>当前为：{{person.name}}</h1>
  <h1>当前为：{{person.age}}</h1>
  <h1>当前为：{{person.job.j1.salary}}</h1>
  <button @click="person.name+='1'">修改名字</button>
  <button @click="person.age+=1">修改年纪</button>
  <button @click="person.job.j1.salary+='10'">涨薪水</button>

</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
  name: 'Demo',
  setup(props, context) {
    let sum = ref(0)
    let msg = ref('hello')

    let person = reactive({
      name: '张三',
      age: 85,
      job: {
        j1: {
          salary: '30k',
        },
        j2: {
          salary: '50k',
        },
      },
    })

    //watch监视
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log('sum值变化了！', newValue, oldValue)
    //   },
    //   { deep: true, immediate: true }
    // )

    //watchEffect监视  -- 监测函数内使用到的属性发生的变化
    watchEffect(() => {
      const x1 = sum.value
      //   console.log(sum) //RefImpl对象
      //   console.log(sum.value) //对象的值
      const x2 = person.job.j1.salary
      console.log('watchEffect监视')
    })

    return {
      sum,
      msg,
      person,
    }
  },

  //vue2中的watch
  watch: {
    //简写
    // sum(newValue, oldValue) {
    //   console.log('sum的值变化了！', newValue, oldValue)
    // },
    // *************************************************
    //完整写法m
    // sum: {
    //   //立即监视
    //   immediate: true,
    //   //深度监视
    //   deep: true,
    //   handler(newValue, oldValue) {
    //     console.log('sum的值变化了！', newValue, oldValue)
    //   },
    // },
  },
}
</script>

<style>
</style>