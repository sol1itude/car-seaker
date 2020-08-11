<template>
  <div id="app">
      <keep-alive exclude="Promotion">
        <router-view id="main-page-routerview"/>
      </keep-alive>
    <div class="main-tab-bar">
      <MainTabBar/>
    </div>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  components: {MainTabBar},
  mounted() {
  }
}
</script>

<style>
@import "assets/css/base.css";
#app{
  height: 100vh;
}
.main-tab-bar {
  z-index: 9;
  height: 55px;
  width: 100%;
  bottom: 0px;
  position: fixed;
}
#main-page-routerview{
  height: calc(100% - 49px);
}
</style>
