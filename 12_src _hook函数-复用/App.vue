<template>
  <button @click="isShowDemo=!isShowDemo">切换隐藏</button>
  <demo v-if="isShowDemo"></demo>
  <hr />
  <hr />
  <test></test>
</template>

<script>
import { ref } from '@vue/reactivity'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  setup() {
    let isShowDemo = ref(true)

    return { isShowDemo }
  },
  components: {
    Demo,
    Test,
  },
}
</script>

<style>
</style>
