<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="testHello">触发hello事件</button>
  <slot name="slotTest"></slot>
</template>

<script>
export default {
  name: 'Demo',
  props: ['name', 'age'],
  emits: ['hello'],
  beforeCreate() {
    // console.log(' beforeCreate().......', this)
  },
  setup(props, context) {
    // console.log('setup().......', this)
    // console.log(props, context)
    // console.log(context)
    // console.log(context.attrs) //相当于vue2中的$attrs
    // console.log(context.emit) //s触发自定义事件的
    console.log(context.slots) //触发自定义事件的
    let person = {
      name: '张三',
      age: 18,
    }

    function testHello() {
      context.emit('hello', 666)
    }

    return {
      person,
      testHello,
    }
  },
}
</script>

<style>
</style>