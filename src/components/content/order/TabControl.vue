<template>
  <div class="order-tab-control-container">
    <div @click="changeDisplay(index)" v-for="(item,index) in tabs" class="order-tab-control-item">
      <div :style="{color:activeIndex===index?'#716dff':'#333'}">
        {{item}}
      </div>
      <div v-if="activeIndex===index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      activeIndex:0,
      tabs:['全部订单','待完成','已完成','已退款']
    }
  },
  methods:{
    changeDisplay(index){
      this.activeIndex=index;
      this.$emit('displayChanged',index);
    }
  }
}
</script>

<style scoped>
.order-tab-control-container{
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  text-align: center;
  background: white;
}
.order-tab-control-item{
  flex: 1;
  height: 100%;
  text-align: center;
  font-size: 14px;
}
.order-tab-control-item>div:nth-child(1){
  height: 100%;
  line-height: 11.733vw;
}
.order-tab-control-item>div:nth-child(2){
  width: 5.333vw;
  height: 2px;
  background: #716dff;
  margin: 0 auto;
  margin-top: -2px;
}
</style>