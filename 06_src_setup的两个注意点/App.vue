<template>
  <demo :name='name'
        :age='age'
        @hello='hello'>
    <template v-slot:slotTest>
      <span>测试slot</span>
    </template>
  </demo>

</template>

<script>
//引入ref函数
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  setup() {
    let name = 'App'
    let age = 25

    function hello(value) {
      alert('HelloWorld' + value)
    }

    return {
      name,
      age,
      hello,
    }
  },
  components: {
    Demo,
  },
}
</script>

<style>
</style>
