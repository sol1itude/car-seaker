<template>
  <div class="cash-out-select">
    <div @click="cashOutType='wx'" style="border-bottom: 1px solid #ddd">
      <div class="out-type-option">
        <img src="~assets/img/promotion/cashout/wxpay.png" alt="">
      </div>
      <div class="cash-out-select-display-info">微信提现</div>
      <div class="cash-out-select-flag"><img :src="CashOutTypeImg('wx')" alt=""></div>
    </div>
    <div @click="cashOutType='ali'">
      <div class="out-type-option">
        <img src="~assets/img/promotion/cashout/alipay.png" alt="">
      </div>
      <div class="cash-out-select-display-info">支付宝提现</div>
      <div class="cash-out-select-flag"><img :src="CashOutTypeImg('ali')" alt=""></div>
    </div>
    <div class="ali-account-container" v-show="cashOutType=='ali'" style="border-top: 1px solid #ddd">
        <div><input @blur="rollTop" placeholder="请输入支付宝账号" type="text"></div>
        <div>
          <img
              @click="rememberAliAccount=!rememberAliAccount"
              :src="rememberAliSelect"
              alt="hello">
        </div>
        <div style="display: inline-block">记住账号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashOutSelect",
  data() {
    return {
      cashOutType: 'wx',
      rememberAliAccount: false
    }
  },
  methods: {
    CashOutTypeImg(val) {
      return val === this.cashOutType ? require('assets/img/common/radio_selected.png') : require('assets/img/common/radio.png')
    },
    rollTop(){
      this.$emit('rollTop')
    }
  },
  computed: {
    rememberAliSelect() {
      return this.rememberAliAccount ? require('assets/img/common/checkbox_selected.png') : require('assets/img/common/checkbox.png')
    }
  }
}
</script>

<style scoped>
.cash-out-select {
  text-align: left;
}

.out-type-option {
  margin-left: 20px;
}

.out-type-option > img {
  width: 20px;
  vertical-align: -3px;
}

.cash-out-select > div {
  height: 56px;
  vertical-align: middle;
  line-height: 56px;
}

.cash-out-select > div > div {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.cash-out-select-flag > img {
  width: 20px;
  height: 20px;
  vertical-align: -5px;
}

.cash-out-select-flag {
  height: 100%;
  width: 20px;
  margin-left: calc(100% - 272px);
}

.cash-out-select-display-info {
  margin-left: 12px;
  width: 180px;
}

.ali-account-container{
  position: relative;
}
.ali-account-container>div{
  display: inline-block;
}


.ali-account-container>div>img{
  width: 100%;
  vertical-align: -5px;
}
.ali-account-container>div:nth-child(1){
  margin-left: 20px;
  width: calc(100% - 140px);
}
.ali-account-container>div:nth-child(2){
  width: 20px;
  height: 100%;
  position: absolute;
  right: 88px;
}
.ali-account-container>div:nth-child(3){
  height: 100%;
  position: absolute;
  right: 20px;
}

.ali-account-container>div:nth-child(1)>input{
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #333;
  border: none;
}
.ali-account-container>div:nth-child(1)>input::placeholder{
  color: #999;
}
</style>