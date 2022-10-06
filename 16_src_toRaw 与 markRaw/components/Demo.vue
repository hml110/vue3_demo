<template>
  <h1>当前求和:{{sum}}</h1>
  <button @click="sum++">sum++</button>
  <hr />
  <hr />
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h1>薪资：{{job.j1.salary}}</h1>
  <h1>车：{{person.car}}</h1>
  <button @click="name+='1'">修改名字</button>
  <button @click="age+=1">修改年纪</button>
  <button @click="job.j1.salary+='10'">涨薪水</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人一台车</button>
  <button @click="person.car.name+='11'">换车名</button>
  <button @click="person.car.price+='11'">加钱</button>

</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'
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

    function showRawPerson() {
      console.log(person)
      console.log(toRaw(person))
      //基本数据类型无区别
      console.log(toRaw(sum))
      console.log(sum)
    }

    function addCar() {
      let car = {
        name: '奔驰',
        price: '50k',
      }
      //自动变成响应式的
      //   person.car = car

      //标记一个对象，使其永远不会再成为响应式对象。
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
    }
  },
}
</script>

<style>
</style>