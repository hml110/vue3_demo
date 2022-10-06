<template>
  <button @click="isShowDemo=!isShowDemo">切换隐藏</button>
  <demo v-if="isShowDemo"></demo>
  <hr />
  <hr />
</template>

<script>
import { ref } from '@vue/reactivity'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  setup() {
    let isShowDemo = ref(true)

    return { isShowDemo }
  },
  components: {
    Demo,
  },
}
</script>

<style>
</style>
