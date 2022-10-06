<template>
  <h1>一个人信息</h1>
  <h2>我是{{name}}</h2>
  <h2>{{age}}岁</h2>
  <h2>工作种类:{{job.type}}岁</h2>
  <h2>工资:{{job.salary}}</h2>
  <button @click="changeInfo">修改人信息</button>
</template>

<script>
//引入ref函数
import { ref } from 'vue'
export default {
  name: 'App',
  setup: function () {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端',
      salary: '30k',
    })

    //方法
    function changeInfo() {
      name.value = '李四'
      age.value = 35
      job.value.type = '后端'
      job.value.salary = '50k'
      console.log(name, age)
      console.log(job.value)
      console.log(job.value.type)
    }

    //返回值  返回一个对象
    return {
      name,
      age,
      changeInfo,
      job,
    }
  },
}
</script>

<style>
</style>
