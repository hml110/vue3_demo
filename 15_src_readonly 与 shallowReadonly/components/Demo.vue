<template>
  <h1>当前求和:{{sum}}</h1>
  <button @click="sum++">sum++</button>
  <hr />
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
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 85,
      job: {
        j1: {
          salary: '30k',
        },
      },
    })

    //让一个响应式数据变为只读的（深只读,不可修改）。
    // person = readonly(person)

    //让一个响应式数据变为只读的（浅只读，不可修改）。
    person = shallowReadonly(person)

    return {
      sum,
      person,
      ...toRefs(person),
    }
  },
}
</script>

<style>
</style>