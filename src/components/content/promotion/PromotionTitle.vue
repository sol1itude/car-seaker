<template>
  <div class="promotion-manage-top">
    <div class="image-container">
      <img src="~assets/img/promotion/manage/balance.png" alt="">
    </div>
    <div class="balance-container">
      余额:
      <span>{{ balance.toFixed(2) }}</span>
    </div>
    <div @click="toCashOutPage" class="to-cash-out-container">
      <div>去提现</div>
      <img src="~assets/img/common/arrow_right_white.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionTitle",
  data() {
    return {
      balance: 480
    }
  },
  methods:{
    toCashOutPage(){
      this.$emit('toCashOutPage')
    }
  }
}
</script>

<style scoped>
.promotion-manage-top {
  height: 100%;
  width: 100%;
  text-align: left;
}

.promotion-manage-top > div {
  display: inline-block;
  height: 100%;
  color: white;
}

.image-container {
  height: 100%;
  vertical-align: top;
}

.image-container img {
  height: 100%;
}

.balance-container {
  font-weight: bold;
  font-size: 17px;
  position: relative;
  top: 4px;
  vertical-align: 2px;
  width: 220px;
  padding-left: 12px;
}

.balance-container > span {
  font-size: 28px;
  position: relative;
  top: 3px;
}

.to-cash-out-container {
  width: calc(100% - 265px);
  text-align: right;
}

.to-cash-out-container div {
  display: inline-block;
  height: 100%;
  line-height: 45px;
  position: relative;
  padding-right: 12px;
  font-size: 14px;
}

.to-cash-out-container img {
  display: inline-block;
  position: relative;
  top: 2px;
  height: 16px;
}
</style>