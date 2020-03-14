<template>
  <div id="app">
    <the-header/>
    <router-view class="view"/>
    <the-footer/>
  </div>
</template>

<style>
@import "./../node_modules/reset-css/reset.css";
  body{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .view{
    min-height: calc(100vh - 160px);
  }
@media screen and (max-width: 1100px) {
  .view{
    min-height: calc(100vh - 180px);
  }
}
</style>
<script>
  window.onbeforeunload = function() {
    return 'Warning!'
  };
  import TheHeader from "./components/global/TheHeader";
  import TheFooter from "./components/global/TheFooter";
  export default {
    components: {TheFooter, TheHeader}
  }
</script>