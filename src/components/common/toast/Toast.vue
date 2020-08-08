<template>
  <div>
    <div @click="toastClicked" class="toast">
      <div class="toast-container">
        <slot>没有内容</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  methods:{
    toastClicked(){
      this.$emit('toastClicked')
    }
  }
}
</script>

<style scoped>
.toast{
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
}
.toast-container{
  position: fixed;
  left: calc(50% - 150px);
  right: calc(50% - 150px);
  top: 30%;
  border-radius: 8px;
  background: white;
  padding: 20px 10px;
  text-align: center;
}
</style>