<template>
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
    <div  class="cash-input-container">
      <input @blur="rollTop" type="text" placeholder="请输入提现金额">
    </div>
  </div>
</template>

<script>
export default {
  name: "CashOutInput",
  methods:{
    rollTop(){
      this.$emit('rollTop')
    }
  }
}
</script>

<style scoped>
.input-container {
  width: 100%;
  height: 100%;
}
.info-container{
  height: 20px;
  position: relative;
  top: 20px;
  text-align: left;
}
.info-container img{
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
.cash-input-container{
  position: relative;
  top: 40px;
  height: calc(100% - 67px);
  font-size: 17px;
  text-align: left;
  padding-left: 48px;
  /*border: 1px solid black;*/
}

.cash-input-container>input{
  height:calc(100% + 3px);
  border: none;
  color: #333;
}
.cash-input-container>input::placeholder{
  color: #999;
}
</style>