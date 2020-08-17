<template>
  <div @click="itemClick" class="tab-bar-item">
    <div v-if="!isActive" :style="{'margin-top':picMarginTop+'px'}">
      <slot name="item-icon"></slot>
    </div>
    <div v-else :style="{'margin-top':picMarginTop+'px'}">
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
    },
    picMarginTop:{
      type:Number,
      default(){
        return 5;
      }
    },
    textMarginTop:{
      type:Number,
      default(){
        return 5;
      }
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
      return this.isActive ? {color: this.activeColor,'margin-top':this.textMarginTop+'px'} : {color: '#666','margin-top':this.textMarginTop+'px'}
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 100%;
  font-size: 10px;
  /*padding-top: 3px;*/
  background: white;
  line-height: 10px;
}

.tab-bar-item img {
  /*height: 23px;*/
  /*width: 23px;*/
  /*margin-top: 5px;*/
  /*margin-bottom: 5px;*/
  /*vertical-align: middle;*/
  height: 100%;
}

.tab-bar-item>div{
  width: 100%;
}

.tab-bar-item>div:nth-child(1){
  height: 23px;
  display: block;
}


</style>
