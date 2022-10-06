<template>
  <div class="son">
    <h3>我是孙组件 </h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from '../components/Dialog.vue'
export default {
  name: 'Son',
  components: {
    Dialog,
  },
}
</script>

<style scoped>
.son {
  background-color: rgb(191, 12, 51);
  padding: 10px;
}
</style>