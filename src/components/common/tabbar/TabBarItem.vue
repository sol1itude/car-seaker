<template>
  <div @click="itemClick" class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data() {
    return {}
  },
  methods: {
    itemClick() {
      if (!this.isActive) {
        this.$router.replace(this.path);
      }
    }
  },
  computed: {
    isActive() {

      return (this.$route.path.indexOf(this.path) !== -1);
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {color: '#666'}
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 60px;
  font-size: 10px;
  /*padding-top: 3px;*/
  border-radius: 10px;
  background: white;
}

.tab-bar-item img {
  height: 23px;
  width: 23px;
  margin-top: 10px;
  margin-bottom: 5px;
  vertical-align: middle;
}

</style>
