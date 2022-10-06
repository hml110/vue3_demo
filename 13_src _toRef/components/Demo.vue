<template>

  <!-- <h1>姓名：{{person.name}}</h1>
  <h1>年龄：{{person.age}}</h1>
  <h1>薪资：{{person.job.j1.salary}}</h1>
  <button @click="person.name+='1'">修改名字</button>
  <button @click="person.age+=1">修改年纪</button>
  <button @click="person.job.j1.salary+='10'">涨薪水</button> -->

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
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 85,
      job: {
        j1: {
          salary: '30k',
        },
      },
    })

    const name1 = person.name
    console.log('@@' + name1)

    //创建一个 ref 对象，其value值指向另一个对象中的某个属性。
    const name2 = toRef(person, 'name')
    console.log('@@' + name2)

    return {
      //person.name    只是一个字符串

      //   name: toRef(person, 'name'),
      //   age: toRef(person, 'age'),
      //   salary: toRef(person.job.j1, 'salary'),

      //toRefs支持批量处理将对象中所有的变成ref属性
      person,
      ...toRefs(person),
    }
  },
}
</script>

<style>
</style>