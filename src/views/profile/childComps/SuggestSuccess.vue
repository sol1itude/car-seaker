<template>
  <div class="suggest-success-page">
    <div class="suggest-success-page-img-container">
      <img src="~assets/img/profile/suggest/suggest_success.png" alt="提交成功">
    </div>
    <div class="suggest-success-page-info-container">提交成功，我们会尽快处理</div>
    <div @click="toOtherPage" class="suggest-success-page-btn">我知道了</div>
  </div>
</template>

<script>
export default {
  name: "SuggestSuccess",
  methods:{
    toOtherPage(){
      this.$router.replace('/profile')
    }
  }
}
</script>

<style scoped>
.suggest-success-page {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: white;
  z-index: 10;
}

.suggest-success-page-img-container {
  width: 100%;
  position: absolute;
  height: 100px;
  top: 80px;
  text-align: center;
}

.suggest-success-page-img-container > img {
  height: 100%;
}

.suggest-success-page-info-container {
  font-size: 14px;
  color: #999;
  position: absolute;
  height: 14px;
  line-height: 14px;
  text-align: center;
  left: 0px;
  right: 0px;
  top: 195px;
}

.suggest-success-page-btn {
  position: absolute;
  height: 52px;
  width: 240px;
  bottom: 120px;
  left: calc(50% - 120px);
  border-radius: 8px;
  font-size: 14px;
  color: white;
  text-align: center;
  line-height: 52px;
  background: #716dff;
}
</style>