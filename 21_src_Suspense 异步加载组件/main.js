//引入的不再是Vue的构造函数了,引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount("#app");

//创建应用实例对象 ---app(类似于之前vue2的vm，但app比vm更“轻”)
const app = createApp(App);
//挂载app
app.mount("#app");

//卸载app
// app.unmount("#app");

// console.log(app);

//Vue2 写法
/*
const vm = new Vue({
  render: (h) => h(app),
});

vm.$mount("#app");
*/
