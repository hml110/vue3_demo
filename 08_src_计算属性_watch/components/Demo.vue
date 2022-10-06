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
import { reactive, ref, watch } from 'vue'
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

    //监视属性
    //情况一：监视ref定义的一个响应式数据
    watch(
      sum,
      (newValue, oldValue) => {
        console.log('sum的值变化了！', newValue, oldValue)
      },
      //支持第三个参数
      { immediate: true, deep: true }
    )

    watch(msg, (newValue, oldValue) => {
      console.log('msg的值变化了！', newValue, oldValue)
    })

    //情况二：监视ref定义的多个响应式数据
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log('msg或sum值变化了！', newValue, oldValue)
      },
      { immediate: true, deep: true }
    )

    //情况三：监视对象  监视reactive定义的响应式数据
    // 		若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
    // 		若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
    watch(
      person,
      (newValue, oldValue) => {
        console.log('person值变化了！', newValue, oldValue) //注意此处无法获得正确的oldValue
      },
      { immediate: true, deep: true } //此次的deep: true无效
    )

    //情况四：监视reactive定义的响应式数据中的某个属性
    watch(
      person.age,
      (newValue, oldValue) => {
        console.log('person.age值变化了！', newValue, oldValue) //注意此处无法获得正确的oldValue
      },
      { immediate: true, deep: true }
    )
    // //runtime-core.esm-bundler.js?d2dd:38 [Vue warn]: Invalid watch source:  85 A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
    /************************************************************************ */
    watch(
      //监视单个属性需要写成函数形式
      () => person.age,
      (newValue, oldValue) => {
        console.log('person.age值变化了！', newValue, oldValue)
      },
      { immediate: true, deep: true }
    )

    //情况五：监视reactive定义的响应式数据中的某些属性
    watch(
      //监视多个属性需要写成函数+数组形式
      [() => person.age, () => person.name],
      (newValue, oldValue) => {
        console.log('person.age or name值变化了！', newValue, oldValue)
      },
      { immediate: true, deep: true }
    )

    //特殊情况
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log('person.job值变化了！', newValue, oldValue)
      },
      { immediate: true, deep: true } //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
    )

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