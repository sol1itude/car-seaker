<template>
  <div class="cash-out-page-top">
    <div class="balance-display">
      {{ balance.toFixed(2) }}
    </div>
    <div class="info-display">
      可提金额(元)
    </div>
  </div>
</template>

<script>
export default {
  name: "CashOutTitle",
  props:{
    balance:{
      type:Number,
      default(){
        return 0;
      }
    }
  }
}
</script>

<style scoped>
.cash-out-page-top>.balance-display{
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  color: #fff;
}
.cash-out-page-top>.info-display{
  margin-top: 12px;
  font-size: 17px;
  font-weight: bold;
  line-height: 17px;
  color: #fff;
}
</style>