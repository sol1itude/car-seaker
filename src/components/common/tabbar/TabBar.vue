<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {TabBarItem}
}
</script>

<style scoped>

#tab-bar {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  justify-content: space-around;
  /*background-color: #f6f6f6;*/
  height: 100%;
  width: 100%;
  /*box-shadow: 0px -1px 15px rgba(100, 100, 100, 0.3);*/
}
</style>
