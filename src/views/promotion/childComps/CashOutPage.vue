<template>
  <div
      class="cash-out-page"
      @touchmove.prevent>
    <div
        class="cash-out-page-top">
      <div>
        {{balance.toFixed(2)}}
      </div>
      <div>
        可提金额(元)
      </div>
    </div>
    <div
        class="cash-out-input-container">
      <div>
        <img
            style="margin-left: -60px;margin-top: 20px;vertical-align: 13px;width: 25px"
            src="~assets/img/promotion/cashout/cash_out_icon.png"
            alt="提现">
        <div
            style="display: inline-block;vertical-align: 20px;margin-left: 12px;font-size: 14px">
          <span
              style="color: black;margin-right: 5px">提现金额</span>
          (5元起提，随时提现)
        </div>
      </div>
      <input
          @blur="rollTop"
          v-model="cashOutNum"
          type="text"
          style="height: 30px;width: 65%;border: none"
          placeholder="请输入提现金额">
    </div>
    <div
        class="cash-out-select-container">
      <div
          @click="cashOutType='wx'"
          style="border-bottom: 1px solid #e2e1e1">
        <div>
          <img
              src="~assets/img/promotion/cashout/wxpay.png"
              alt="">
        </div>
        <div>
          微信提现
        </div>
        <div>
          <img
              :src="CashOutTypeImg('wx')"
              alt="">
        </div>
      </div>
      <div
          @click="cashOutType='ali'">
        <div>
          <img
              src="~assets/img/promotion/cashout/alipay.png"
              alt="">
        </div>
        <div>
          支付宝提现
        </div>
        <div>
          <img

              :src="CashOutTypeImg('ali')"
              alt="">
        </div>
      </div>
      <div
          v-if="cashOutType==='ali'"
          class="remember-ali-account">
        <div
            style="height: 100%;width: 100%;display: inline-block">
          <input
              v-model="aliAccount"
              @blur="rollTop"
              type="text"
              placeholder="输入支付宝账号"
              style="border:none;height: 100%;font-size: 14px;width: 60%">
          <img
              @click="rememberAliAccount=!rememberAliAccount"
              style="margin-left: 5px;height: 18px;width: 18px"
              :src="rememberAliSelect"
              alt="hello">
          <span
              @click="rememberAliAccount=!rememberAliAccount"
              style="position: relative;top: 2px;left: 8px">记住账号</span>
        </div>
      </div>
    </div>
    <div
        @click="cashOutNow"
        id="cash-out-now-btn"
        style="width: 240px">
      立即提现
    </div>
  </div>
</template>

<script>
export default {
  name: "CashOutPage",
  data() {
    return {
      balance: 480,
      cashOutType: 'wx',
      aliAccount: '',
      cashOutNum: '',
      te: '~assets/img/promotion/cashout/alipay.png',
      rememberAliAccount: false
    }
  },
  methods: {
    isANumber(value) {
      let reg = /^[+]?[0-9]+(\.[0-9]{1,4})?$/;
      return reg.test(value);
    },
    rollTop() {
      window.scrollTo(0, 0)
    },
    CashOutTypeImg(val) {
      return val === this.cashOutType ? require('assets/img/common/radio_selected.png') : require('assets/img/common/radio.png')
    },
    judgeAliAccount() {
      return this.cashOutType === 'wx' ? true : (this.aliAccount.trim() !== '')
    },
    judegCash() {
      return this.isANumber(this.cashOutNum) && (parseFloat(this.cashOutNum) >= 5.0);
    },
    cashOutNow() {
      //TODO 判断提现金额
      if (!this.judegCash()) {
        alert('请输入正确的提现金额');
        return;
      }

      if (this.judgeAliAccount()) {
        alert('真的要用 ' + this.cashOutType + ' 提现' + this.cashOutNum + '吗？')
        //执行提现操作
        this.realCashOut();
      } else {
        alert('支付宝账号为空')
      }
    },
    //发送提现请求
    realCashOut(){
      if (confirm('提现成功，预计30分钟内到账\n返回管理页吗？')){
        this.$router.replace('/promotion/manage')
      }else {
        this.cashOutNum=''
        //do nothing
      }
    }
  },
  computed: {
    rememberAliSelect() {
      return this.rememberAliAccount ? require('assets/img/common/checkbox_selected.png') : require('assets/img/common/checkbox.png')
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
  height: 100%;
  text-align: center;
}

.cash-out-page > div {
  width: calc(100% - 40px);
  margin-left: 20px;
  border-radius: 4px;
}

.cash-out-page-top {
  font-size: 17px;
  font-weight: bold;
  color: white;
  /*position: relative;*/
  /*top: 40px;*/
  padding-top: 40px;
}

.cash-out-page-top > div:nth-child(1) {
  font-size: 28px;

}

.cash-out-page-top > div:nth-child(2) {
  margin-top: 12px;
}

.cash-out-input-container {
  margin-top: 20px;
  background: white;
  height: 100px;
}


/*选择支付方式的样式*/
.cash-out-select-container {
  margin-top: 20px;
  background: white;
}

.cash-out-select-container > div {
  /*line-height: 56px;*/
  height: 56px;
  font-size: 14px;
  color: #333;
  text-align: left;
}

.cash-out-select-container > div > div {
  display: inline-block;
}

.cash-out-select-container > div > div > img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.cash-out-select-container > div > div:nth-child(1) {
  margin-left: 20px;
  width: 40px;
}

.cash-out-select-container > div > div:nth-child(2) {
  margin-left: 12px;
  font-size: 14px;
  line-height: 56px;
  width: calc(100% - 110px);
  vertical-align: middle;
}

.cash-out-select-container > div > div:nth-child(3) {
  vertical-align: middle;
}

.cash-out-select-container > div > div:nth-child(3) > img {
  width: 20px;
  height: 20px;
}


#cash-out-now-btn {

  margin-top: 40px;
  background: #716dff;
  height: 52px;
  line-height: 52px;
  border-radius: 8px;
  color: white;
  margin-left: calc(50% - 115px);

}

.remember-ali-account {
  border-top: 1px solid #eeeeee;
}
</style>