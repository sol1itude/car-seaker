<template>
  <div class="cash-out-success-page">
    <div class="cash-out-success-page-img-container">
      <img src="~assets/img/promotion/cashoutsuccess/cash_out_success.png" alt="提现成功">
    </div>
    <div class="cash-out-success-page-info-container">提现成功，请留意账户余额</div>
    <div @click="toOtherPage" class="cash-out-success-page-btn">我知道了</div>
  </div>
</template>

<script>
export default {
  name: "CashOutSuccessPage",
  methods:{
    toOtherPage(){
      this.$router.replace('/promotion/manage')
    }
  }
}
</script>

<style scoped>
.cash-out-success-page {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: white;
  z-index: 10;
}

.cash-out-success-page-img-container {
  width: 100%;
  position: absolute;
  height: 100px;
  top: 80px;
  text-align: center;
}

.cash-out-success-page-img-container > img {
  height: 100%;
}

.cash-out-success-page-info-container {
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

.cash-out-success-page-btn {
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