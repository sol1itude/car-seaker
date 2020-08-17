<template>
  <div class="single-line-message-toast">
    <div>
      <slot>no message</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleLineMessageToast"
}
</script>

<style scoped>
.single-line-message-toast {
  display: inline-block;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  background: rgba(0,0,0,0.6);
  line-height: 14px;
  color: white;
}
</style>