<template>
  <h1>一个人信息</h1>
  <h2>我是{{name}}</h2>
  <h2>{{age}}岁</h2>
  <h2>工作种类:{{job.type}}岁</h2>
  <h2>工资:{{job.salary}}</h2>
  <h2>对象嵌套检测:{{job.a.b.c}}</h2>
  <h2>爱好:{{hobby}}</h2>
  <button @click="changeInfo">修改人信息</button>

  <hr />
  <hr />
  <hr />
  <h1>一个人信息</h1>
  <h2>我是{{person.name}}</h2>
  <h2>{{person.age}}岁</h2>
  <h2>工作种类:{{person.job.type}}岁</h2>
  <h2>工资:{{person.job.salary}}</h2>
  <h2>对象嵌套检测:{{person.job.a.b.c}}</h2>
  <h2>爱好:{{person.hobby}}</h2>
  <button @click="changeInfoByReactive">修改人信息</button>
</template>

<script>
//引入ref函数
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  setup: function () {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type: '前端',
      salary: '30k',
      a: {
        b: {
          c: 666,
        },
      },
    })
    let hobby = reactive(['抽烟', '喝酒'])

    //直接定义一个对象
    // let person = {
    //   name: '张三',
    //   age: 18,
    //   job: {
    //     type: '前端',
    //     salary: '30k',
    //     a: {
    //       b: {
    //         c,
    //       },
    //     },
    //   },
    //   hobby: ['抽烟', '喝酒'],
    // }
    // let p = reactive(person)

    //直接使用reactive
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: '30k',
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ['抽烟', '喝酒'],
    })

    //方法
    function changeInfo() {
      //通过ref定义的
      name.value = '李四'
      age.value = 35
      //通过reactive定义的
      job.salary = '50k'
      job.type = '后端'
      job.a.b.c = 999
      hobby[0] = '学习'
    }

    function changeInfoByReactive() {
      person.name = '李四'
      person.age = 35
      person.job.salary = '50k'
      person.job.type = '后端'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }

    //返回值  返回一个对象
    return {
      name,
      age,
      changeInfo,
      job,
      hobby,
      person,
      changeInfoByReactive,
    }
  },
}
</script>

<style>
</style>
