<template>
  <input type="text"
         v-model="keyWords"><br><br>
  <input type="text"
         v-model="keyWords">
</template>

<script>
import { ref, customRef } from '@vue/reactivity'
export default {
  name: 'App',
  setup() {
    // 自定义的ref ---myRef
    function myRef(value, delay) {
      let timer
      console.log('@myRef   :' + value)
      const x = customRef((track, trigger) => {
        return {
          get() {
            console.log('有人从myRef读取,我提供了 :', value)
            track() //通知vue追踪value的变化(提前和get商量一下,让它认为这个value是有用的)
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            console.log('有人从myRef修改,我监测到了 :', newValue)
            timer = setTimeout(() => {
              value = newValue //修改数据
              trigger() //通知vue重新解析模板
            }, delay)
          },
        }
      })
      return x
    }

    //使用vue提供的内置ref
    // let keyWords = ref('hello')
    //使用自定义的ref
    let keyWords = myRef('hello', 500)

    return { keyWords }
  },
  components: {},
}
</script>

<style>
</style>
