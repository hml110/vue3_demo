<template>
  <div class="child">
    <h2>我是子组件</h2>
    <Son></Son>
  </div>
</template>

<script>
import Son from '../components/Son.vue'
export default {
  name: 'Child',
  components: { Son },
  setup() {},
}
</script>

<style scoped>
.child {
  background-color: rgb(121, 29, 226);
  padding: 10px;
}
</style>