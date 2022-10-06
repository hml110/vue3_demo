import { onBeforeUnmount, onMounted, reactive } from "vue";

function usePoint() {
  //实现鼠标打点的数据
  let point = reactive({
    x: 0,
    y: 0,
  });

  //实现鼠标打点的方法
  function showPoint(event) {
    console.log(event.pageX, event.pageY);
    point.x = event.pageX;
    point.y = event.pageY;
  }

  //实现鼠标打点的钩子
  onMounted(() => {
    window.addEventListener("click", showPoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", showPoint);
  });

  return point;
}

//暴露
export default usePoint;
