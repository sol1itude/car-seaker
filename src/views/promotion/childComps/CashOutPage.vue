<template>
  <div class="cash-out-page" @touchmove.prevent>
    <div class="title-container">
      <div class="cash-out-page-top">
        <div class="balance-display">
          {{ balance.toFixed(2) }}
        </div>
        <div class="info-display">
          可提金额(元)
        </div>
      </div>
    </div>
    <div class="cash-out-input-container">
      <div class="input-container">
        <div class="info-container">
          <div>
            <img
                src="~assets/img/promotion/cashout/cash_out_icon.png"
                alt="提现">
          </div>
          <div>
            提现金额
          </div>
          <div>
            (5元起提，随时提现)
          </div>
        </div>
        <div class="cash-input-container">
          <input @blur="rollTop"  v-model="cashOutNum" type="text" placeholder="请输入提现金额">
        </div>
      </div>
    
    </div>
    <div class="cash-out-type-select-container">
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
          <div><input @blur="rollTop" ref="aliAccountInput" v-model="aliAccount" placeholder="请输入支付宝账号" type="text">
          </div>
          <div>
            <img
                @click="rememberAliAccount=!rememberAliAccount"
                :src="rememberAliSelect"
                alt="hello">
          </div>
          <div style="display: inline-block">记住账号</div>
        </div>
      </div>
    </div>
    
    <div
        @click="cashOutNow"
        id="cash-out-now-btn"
        style="width: 240px">
      立即提现
    </div>
    <div v-if="wrongCashOutNum" class="single-message-container">
      <SingleLineMessageToast>{{ singleMessage }}</SingleLineMessageToast>
    </div>
  </div>
</template>

<script>
import CashOutTitle from "@/components/content/cashout/CashOutTitle";
import CashOutInput from "@/components/content/cashout/CashOutInput";
import CashOutSelect from "@/components/content/cashout/CashOutSelect";
import SingleLineMessageToast from "@/components/common/messageToast/SingleLineMessageToast";

export default {
  name: "CashOutPage",
  components: {SingleLineMessageToast, CashOutSelect, CashOutInput, CashOutTitle},
  data() {
    return {
      balance: 480,
      cashOutType: 'wx',
      aliAccount: '',
      cashOutNum: '',
      te: '~assets/img/promotion/cashout/alipay.png',
      rememberAliAccount: false,
      wrongCashOutNum: false
      
    }
  },
  methods: {
    isANumber(value) {
      let reg = /^[+]?[0-9]+(\.[0-9]{1,4})?$/;
      return reg.test(value);
    },
    CashOutTypeImg(val) {
      return val === this.cashOutType ? require('assets/img/common/radio_selected.png') : require('assets/img/common/radio.png')
    },
    rollTop() {
      window.scrollTo(0, 0)
      this.judgeCash();
    },
    
    judgeAliAccount() {
      return this.cashOutType === 'wx' ? true : (this.aliAccount.trim() !== '')
    },
    judgeCash() {
      let result = this.isANumber(this.cashOutNum) && (parseFloat(this.cashOutNum) >= 5.0) && (parseFloat(this.cashOutNum) <= 100.0)&&(parseFloat(this.cashOutNum) <= this.balance);
      this.wrongCashOutNum = !result;
      if (this.wrongCashOutNum){
        setTimeout(()=>{
          this.wrongCashOutNum=false
        },2000)
      }
      return result;
    },
    cashOutNow() {
      //TODO 判断提现金额
      if (!this.judgeCash()) {
        return;
      }
      if (this.cashOutNum > this.balance) {
        alert('余额不足');
        return;
      }
      
      if (this.judgeAliAccount()) {
        //alert('真的要用 ' + this.cashOutType + ' 提现' + this.cashOutNum + '吗？')
        //执行提现操作
        this.realCashOut();
      } else {
        alert('支付宝账号为空')
      }
    },
    //发送提现请求
    realCashOut() {
      //1.发送请求
      //2.判断结果
      setTimeout(()=>{
        this.$router.replace('/promotion/cashoutsuccess')
      },1000)
    }
  },
  computed: {
    rememberAliSelect() {
      return this.rememberAliAccount ? require('assets/img/common/checkbox_selected.png') : require('assets/img/common/checkbox.png')
    },
    singleMessage() {
      if (!this.isANumber(this.cashOutNum)){
        return '请输入正确金额'
      }

      if (this.cashOutNum<5){
        return '提现金额不小于5元'
      }
      if (parseFloat(this.cashOutNum)>this.balance){
        return '余额不足'
      }
      if (this.cashOutNum>100){
        return '单笔金额不超过100元'
      }
      return '请输入正确金额'
      //return this.cashOutNum > 100 ? '单笔金额不超过100元' : (this.cashOutNum < 5 ? '提现金额不小于5元' : '请输入正确金额')
    }
  },
  watch: {
    wrongCashOutNum(val) {
      console.log(val)
    }
  }
}
</script>

<style
    scoped>
.cash-out-page {
  background: #f8f8f8 url("~assets/img/promotion/cashout/cash_out_background.png") no-repeat fixed top;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 10;
  text-align: center;
}

.title-container {
  position: relative;
  top: 30px;
  height: 57px;
}

.cash-out-input-container {
  position: relative;
  width: calc(100% - 40px);
  top: 60px;
  left: 20px;
  height: 107px;
  border-radius: 4px;
  background: white;
}


input{
  outline: none;
}

.cash-out-type-select-container {
  position: relative;
  top: 80px;
  left: 20px;
  border-radius: 4px;
  background: white;
  width: calc(100% - 40px);
  color: #333;
  /*height: 100px;*/
}


/*顶部显示设置*/
.cash-out-page-top > .balance-display {
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  color: #fff;
}

.cash-out-page-top > .info-display {
  margin-top: 12px;
  font-size: 17px;
  font-weight: bold;
  line-height: 17px;
  color: #fff;
}


.input-container {
  width: 100%;
  height: 100%;
}

.info-container {
  height: 20px;
  position: relative;
  top: 20px;
  text-align: left;
}

.info-container img {
  height: 100%;
}

.info-container > div {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info-container > div:nth-child(1) {
  margin-left: 20px;
}

.info-container > div:nth-child(2) {
  height: 100%;
  margin-left: 12px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
}

.info-container > div:nth-child(3) {
  height: 100%;
  margin-left: 12px;
  line-height: 20px;
  font-size: 14px;
  color: #999;
}

.cash-input-container {
  position: relative;
  top: 40px;
  height: calc(100% - 67px);
  font-size: 17px;
  text-align: left;
  padding-left: 48px;
  /*border: 1px solid black;*/
}

.cash-input-container > input {
  height: calc(100% + 3px);
  width: calc(100% - 40px);
  border: none;
  color: #333;
}

.cash-input-container > input::placeholder {
  color: #999;
}


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
  vertical-align: -3px;
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

.ali-account-container {
  position: relative;
}

.ali-account-container > div {
  display: inline-block;
  height: 100%;
}


.ali-account-container > div > img {
  width: 100%;
  vertical-align: -5px;
}

.ali-account-container > div:nth-child(1) {
  margin-left: 20px;
  width: calc(100% - 140px);
  height: calc(100% - 2px);
  margin-top: -5px;
}

.ali-account-container > div:nth-child(2) {
  width: 14px;
  height: 100%;
  position: absolute;
  right: 80px;
  top: -4px;
}

.ali-account-container > div:nth-child(3) {
  height: 100%;
  position: absolute;
  right: 20px;
  top: -1px;
  font-size: 14px;
}

.ali-account-container > div:nth-child(1) > input {
  width: 100%;
  font-size: 14px;
  color: #333;
  border: none;
}

.ali-account-container > div:nth-child(1) > input::placeholder {
  color: #999;
}


#cash-out-now-btn {
  margin-top: 110px;
  background: #716dff;
  height: 52px;
  line-height: 52px;
  border-radius: 8px;
  /*z-index: 20;*/
  /*position: relative;*/
  color: white;
  margin-left: calc(50% - 115px);
  
}

.single-message-container {
  position: fixed;
  width: 100%;
  text-align: center;
  top: 255px;
  
  height: 54px;
}


</style>