<template>
  <div>
    <button type="button"
            @click="isShow=true">点我弹个窗</button>
    <teleport to="body">
      <!-- 遮罩层 -->
      <div class="mask"
           v-if="isShow">
        <!-- 弹窗 -->
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>内容！</h4>
          <h4>内容！</h4>
          <h4>内容！</h4>
          <h4>内容！</h4>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)

    return {
      isShow,
    }
  },
}
</script>

<style>
.dialog {
  width: 300px;
  height: 300px;
  background-color: rgb(52, 251, 17);
  text-align: center;
  position: absolute;
  /* 参考定位原始 */
  top: 50%;
  left: 50%;
  /* 参考自身 */
  transform: translate(-50%, -50%);
}

.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
}
</style>