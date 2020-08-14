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
  width: 80vw;
  left: calc(50% - 40vw);
  top: calc(50vh - 45vw);
  border-radius: 8px;
  background: white;
  padding: 8vw 5.33vw;
  text-align: center;
}
</style>