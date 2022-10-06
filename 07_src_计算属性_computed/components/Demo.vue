<template>
  <h1>一个人的信息</h1>
  姓： <input type="text"
         v-model="person.firstName"><br><br>
  名： <input type="text"
         v-model="person.lastName"><br><br>
  姓名：<input type="text"
         v-model="person.fullName"><br><br>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  setup(props, context) {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })

    //vue3中的计算属性
    // let fullName = computed(() => {
    //   return person.firstName + person.lastName
    // })

    //计算属性 ---简写（没有考虑被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    //计算属性 ---完整写法
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      },
    })

    return {
      person,
      //   fullName,
    }
  },
  //   //vue2中的计算属性
  //   computed: {
  //     fullName() {
  //       return this.person.firstName + this.person.lastName
  //     },
  //   },
}
</script>

<style>
</style>