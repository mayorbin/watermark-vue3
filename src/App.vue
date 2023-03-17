<script setup>
import { onMounted } from 'vue'
import testWM from './assets/test-wm.jpg'

/* 设置网页水印：明水印，暗水印 */

// 明水印-方式一：后端返回水印图片
// 在css中先设置好背景图的样式
// z-index: -1;pointer-events: none;
/* onMounted(() => {
  setTimeout(() => {
    const app = document.querySelector('#watermark')
    app.setAttribute('style', `background-image: url(${testWM});`)
  }, 1000)
}) */

// 明水印-方式二：
import './utils/byDom'
</script>

<template>
  <!-- 方式一：后端返回带水印的图片或文件 -->
  <!-- <div id="watermark" ></div> -->
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
/* 明水印-方式一：设置水印背景图片样式 */
#watermark {
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  position: fixed;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* opacity: 0.2; */
}
</style>
