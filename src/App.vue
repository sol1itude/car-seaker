<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="main-tab-bar">
      <MainTabBar/>
    </div>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  components: {MainTabBar}
}
</script>

<style>
@import "assets/css/base.css";

.main-tab-bar {
  position: absolute;
  z-index: 9;
  height: 200px;
}
</style>
