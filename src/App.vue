<template>
  <div id="main">
    <a-button>保存</a-button>
    <div id="container">
      <div class="side-left"></div>
      <div class="center"></div>
      <div class="side-right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  // components: {
  //   HelloWorld,
  // },
})
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
}
#main {
  width: 100%;
  height: 100%;
  #container {
    width: 100%;
    height: calc(100% - 60px);

    .side-left {
      float: left;
      width: 20%;
      height: 100%;
      background-color: yellow;
    }
    .side-right {
      float: right;
      width: 20%;
      height: 100%;
      background-color: yellow;
    }
  }
}
</style>
